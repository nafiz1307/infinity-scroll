const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray=[];

//Unsplash Api
const count =30;
const apiKey = '8JdPDyEjeoZTsc2L0FBOPbUO3YDz9cuHYT7uZdQX1Sw';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//Check if all images are loaded

function imageLoaded(){
    imagesLoaded++;
    console.log(imagesLoaded);
    if(imagesLoaded===totalImages){
        ready = true;
        console.log('ready=' , ready);
    }
}

//Helper Function
function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

//Create Elements for links and photos
function displayPhotos(){

    totalImages = photosArray.length;
    console.log('total images', totalImages)
    photosArray.forEach((photo)=>{
        const item = document.createElement('a');
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item,{
            href:photo.links.html,
            target : '_blank',
        })

        //event listener for load checking
        

        const img = document.createElement('img');
        img.addEventListener('load',imageLoaded)
        // img.setAttribute('src',photo.urls.regular);
        // img.setAttribute('alt',photo.alt_description);
        // img.setAttribute('title',photo.alt_description);
        setAttributes(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        item.appendChild(img);
        imageContainer.appendChild(item)
    })
}





//Fetch Unsplash photos

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        //Catch error
    }
}

//Scroll bottom test
window.addEventListener('scroll', ()=>{
    if(window.innerHeight + window.scrollY>=document.body.offsetHeight - 100 && ready){
        ready = false;
        getPhotos();
    }
    
})


//onLoad
getPhotos();