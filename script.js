//Unsplash Api
const count =10;
const apiKey = '7Suu8yUGPm6ZRAhn6leLmOkdd8l1SpCE2uXa11o2Uak';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//Fetch Unsplash photos

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        //Catch error
    }
}


//onLoad
getPhotos();