const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

//Create Elements for links and photos
function displayPhotos(){
    photosArray.forEach((photo)=>{
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);


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


//onLoad
getPhotos();