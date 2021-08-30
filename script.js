const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

//Check if all images are loaded

function imageLoaded(){
    console.log('image loaded');
}

//Helper Function
function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

//Create Elements for links and photos
function displayPhotos(){
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



//Unsplash Api
const count =10;
const apiKey = '8JdPDyEjeoZTsc2L0FBOPbUO3YDz9cuHYT7uZdQX1Sw';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

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
    if(window.innerHeight + window.scrollY>=document.body.offsetHeight - 100)
    getPhotos()
})


//onLoad
getPhotos();