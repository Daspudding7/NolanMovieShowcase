const youtubeURL = "https://www.youtube.com/";

const NolanMovies = {

    "Batman Begins (2005)": "watch?v=neY2xVmOfUM",
    "Dunkirk (2017)" : "watch?v=F-eMt3SrfFU",
    "Following (1999)" : "watch?v=62TTN6gD2So",
    "Inception (2010)" : "watch?v=YoHD9XEInc0",
    "Insomnia (2002)" : "watch?v=emIHzg4VH8A",
    "Interstellar (2014)" : "watch?v=zSWdZVtXT7E",
    "Memento (2000)" : "watch?v=4CV41hoyS8A",
    "Tenet (2020)" : "watch?v=LdOM0x0XDMo",
    "The Dark Knight (2008)" : "watch?v=EXeTwQWrcwY",
    "The Dark Knight Rises (2012)" : "watch?v=GokKUqLcvD8",
    "The Prestige (2006)" : "watch?v=ELq7V8vkekI",
    "Oppenheimer (2023)" :  "watch?v=uYPbbksJxIg"

}; 



const movieTitles = Object.keys(NolanMovies);
const movieTrailers = Object.values(NolanMovies);


const LoadCarousel = () => {

    
    let carousel = document.getElementById("carousel");

    for (let i = 0; i < movieTitles.length; i++) {

        let spanParent = document.createElement("span");
        let imageElement = document.createElement("img");
        imageElement.src = `images/${movieTitles[i]}.jpeg`;
        imageElement.setAttribute("data-movieIndex", i);

        imageElement.addEventListener("click", DirectToTrailer);

        spanParent.appendChild(imageElement);
        spanParent.setAttribute("style", `--i:${i}`);

    
        carousel.appendChild(spanParent);

    }

    CalculateImageAngle();

}


function DirectToTrailer(event) {

    console.log(event.target);
    let dataIndex = event.target.getAttribute("data-movieIndex");

    window.open(youtubeURL + movieTrailers[dataIndex]);

}

function CalculateImageAngle() {

    const circleInDegrees = 360;

    let movieCount = Object.keys(NolanMovies).length
    
    let carouselImageAngle = circleInDegrees / movieCount;

    let cssElementWithAngleVariable = document.querySelectorAll("#carousel span");
    
    for(let i= 0; i< cssElementWithAngleVariable.length; i++){

        cssElementWithAngleVariable[i].style.setProperty('--carousel-image-angle', `${carouselImageAngle}deg`);

    }

    console.log(cssElementWithAngleVariable);

}


LoadCarousel();
