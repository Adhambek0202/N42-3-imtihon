let elList = document.querySelector(".list");
let elBtnPokemon = document.querySelector(".btn__pokemon");
let elBtnMovies = document.querySelector(".btn__movies");
let elBtnBoth = document.querySelector(".btn__both");
let elBtnClear = document.querySelector(".btn__clear");
let elResult = document.querySelector(".result");
let elimgMovie = document.querySelector(".movielogo");
let elimgPokemon = document.querySelector(".pokemonlogo");


let pokemonArray = pokemons.slice(0, 25);
let moviesArray = movies.slice(0, 20);


elBtnPokemon.addEventListener("click", function(){
    elList.innerHTML = null;
    renderArray(pokemonArray)
    elimgPokemon.style = "display: block";
    elimgPokemon.style = "text-align: center"
    elimgMovie.style = "display: none;";
})
elBtnMovies.addEventListener("click", function(){
    elList.innerHTML = null;
    renderArray(moviesArray)
    elimgPokemon.style = "display: none";
    elimgMovie.style = "display: block;";
    elimgMovie.style = "text-align: center"
})
elBtnBoth.addEventListener("click", function(){
    elList.innerHTML = null;
    renderBoth(pokemonArray, moviesArray)
    elimgPokemon.style = "display: block";
    elimgMovie.style = "display: block;";
    elimgPokemon.style = "text-align: center"
    elimgMovie.style = "text-align: center"
})
elBtnClear.addEventListener("click", function(){
    elList.innerHTML = null;
    elResult.textContent = 0;
    elimgPokemon.style = "display: none";
    elimgMovie.style = "display: none;";
})

function renderArray(array) {
    elList.innerHTML= null

    elResult.textContent = array.length 

    for (const item of array) {
        let newLI = document.createElement("li");

        let newImg = document.createElement("img");
        let newH2 = document.createElement("h2");
        let newH4 = document.createElement("h4");
        let newH5 = document.createElement("h5")
        let newP = document.createElement("p")
        let newA = document.createElement("a")
        let newA2 = document.createElement("a")
        let newA3 = document.createElement("a")
        newImg.width = "200";

        newLI.style = "list-style-type:none;text-align:center;background-color: rgba(226, 226, 226, 0.712); border-radius:5px;"
        newImg.style = "max-width: 220px;width: 100%;height: 150px;object-fit: contain; object-position: center;"

        if (item.name) {
        newImg.src = item.img;
        newH2.textContent = item.name;
        newH4.textContent = item.type;
        newH5.textContent = item.weight;
        newP.textContent = item.height;

        }else {
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newH2.textContent = item.Title;
            newH4.textContent = item.Categories;
            newH5.textContent = item.imdb_rating;
            newP.textContent = item.runtime;
            newA.href = `#`;
            newA2.href = `#`;
            newA2.textContent = "Bookmark"
            newA.textContent = "Watch trailer";
            newA.style = "padding:2px;text-decoration: none;border: solid 1px red;color: red; font-size:18px; margin-right:3px;border-radius:3px;"
            newA2.style = "padding:2px;text-decoration: none;border: solid 1px green;color: green; font-size:18px;border-radius:3px;"
            newH2.style = "background-color: aqua; color:white; font-size:18px;"

        }
        
        newLI.appendChild(newImg);
        newLI.appendChild(newH2);
        newLI.appendChild(newH4)        
        newLI.appendChild(newH5)        
        newLI.appendChild(newP)        
        newLI.appendChild(newA)        
        newLI.appendChild(newA2)        
        newLI.appendChild(newA3)        
        elList.appendChild(newLI);
    }
}

function renderBoth(array1, array2) {
    elList.innerHTML = null;
    
    let newArray = array1.concat(array2)
    
    elResult.textContent = newArray.length 

    for (const item of newArray) {
        let newLI = document.createElement("li");

        let newImg = document.createElement("img");
        let newH2 = document.createElement("h2");
        let newH4 = document.createElement("h4");
        let newH5 = document.createElement("h5")
        let newP = document.createElement("p")
        let newA = document.createElement("a")
        let newA2 = document.createElement("a")
        let newA3 = document.createElement("a")
        newImg.width = "200";

        newLI.style = "list-style-type:none;text-align:center;background-color: rgba(226, 226, 226, 0.712); border-radius:5px;"
        newImg.style = "max-width: 220px;width: 100%;height: 150px;object-fit: contain; object-position: center;"

        if (item.name) {
        newImg.src = item.img;
        newH2.textContent = item.name;
        newH4.textContent = item.type;
        newH5.textContent = item.weight;
        newP.textContent = item.height;

        }else {
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newH2.textContent = item.Title;
            newH4.textContent = item.Categories;
            newH5.textContent = item.imdb_rating;
            newP.textContent = item.runtime;
            newA.href = `#`;
            newA2.href = `#`;
            newA2.textContent = "Bookmark"
            newA.textContent = "Watch trailer";
            newA.style = "padding:2px;text-decoration: none;border: solid 1px red;color: red; font-size:18px; margin-right:3px;border-radius:3px;"
            newA2.style = "padding:2px;text-decoration: none;border: solid 1px green;color: green; font-size:18px;border-radius:3px;"
            newH2.style = "background-color: aqua; color:white; font-size:18px;"

        }
        
        newLI.appendChild(newImg);
        newLI.appendChild(newH2);
        newLI.appendChild(newH4)        
        newLI.appendChild(newH5)        
        newLI.appendChild(newP)        
        newLI.appendChild(newA)        
        newLI.appendChild(newA2)        
        elList.appendChild(newLI);
    }
}





