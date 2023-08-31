const NolanMovies = ["Batman Begins (2005)", "Dunkirk (2017)", "Following (1999)", "Inception (2010)", "Insomnia (2002)", "Interstellar (2014)", "Memento (2000)", "Tenet (2020)", "The Dark Knight (2008)", "The Dark Knight Rises (2012)", "The Prestige (2006)", "Oppenheimer (2023)"]


let carousel = document.getElementById("carousel");

for (let i = 0; i < NolanMovies.length; i++) {

    let imageElement = document.createElement("img");
    imageElement.src = `images/${NolanMovies[i]}.jpeg`

    carousel.appendChild(imageElement);

}



