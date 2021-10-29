// semua movie yang ingin ditampilkan ada di sini
const movies =[
    {name: "BLACK PANTHER", tomatoes: "96%", Directors: "Ryan Coogler", starring:"Chadwick Boseman",
    poster: "https://m.media-amazon.com/images/I/A1PaCX4oXjL._AC_SL1500_.jpg",
    desc:"After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king.",
    link:"https://www.rottentomatoes.com/m/black_panther_2018"},

    {name: "AVENGERS: ENDGAME", tomatoes: "96%", Directors:"Anthony Russo, Joe Russo", starring:"Multiple MCU Actors/Actresses",
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    link:"https://www.rottentomatoes.com/m/avengers_endgame",
    desc:"The remaining Avengers must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."},

    {name: "IRON MAN", tomatoes: "94%", Directors:"Jon Favreau", starring:"Robert Downey Jr.",
    poster:"https://cf.shopee.co.id/file/a6914f351153b5642dc0c8a0ccf57b45",
    link:"https://www.rottentomatoes.com/m/iron_man",
    desc: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon"},

    {name: "THOR: RAGNAROK", tomatoes: "93%", Directors:"Taika Watiti", starring:"Chris Hemsworth",
    poster:"https://upload.wikimedia.org/wikipedia/id/b/be/Thor_Ragnarok_poster_2.jpg",
    link: "https://www.rottentomatoes.com/m/thor_ragnarok_2017",
    desc: "Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization."},

    {name: "SPIDER-MAN: HOMECOMING", tomatoes: "92%", Directors:"Jon Watts", starring:"Tom Holland",
    poster: "https://upload.wikimedia.org/wikipedia/id/f/f9/Spider-Man_Homecoming_poster.jpg",
    link:"https://www.rottentomatoes.com/m/spider_man_homecoming",
    desc:"Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man."},

    {name: "GUARDIANS OF THE GALAXY", tomatoes: "92%", Directors:"James Gunn", starring:"Chris Pratt",
    poster:"https://s4.bukalapak.com/img/9913010492/large/guardians_of_the_galaxy_movie_poster1.jpg",
    link:"https://www.rottentomatoes.com/m/guardians_of_the_galaxy",
    desc:"Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain."},

    {name: "SHANG-CHI AND THE LEGEND OF THE TEN RINGS", tomatoes: "92%", Directors:"Destin Daniel Cretton", starring:"Simu Lu",
    poster:"https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    link:"https://www.rottentomatoes.com/m/shang_chi_and_the_legend_of_the_ten_rings",
    desc:"Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization."},

    {name: "THE AVENGERS", tomatoes: "91%", Directors:"Joss Whedon", starring:"Multiple MCU Actors/Acresses",
    poster: "https://s1.bukalapak.com/img/17701522681/large/data.jpeg",
    link:"https://www.rottentomatoes.com/m/marvels_the_avengers",
    desc:"Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth" },

    {name: "SPIDER-MAN: FAR FROM HOME", tomatoes: "90%", Directors:"Jon Watts", starring:"Tom Holland",
    poster:"https://upload.wikimedia.org/wikipedia/id/8/84/SpiderManFarFromHomeTheatrical.jpg",
    link:"https://www.rottentomatoes.com/m/spider_man_far_from_home",
    desc:"Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission."},

    {name: "CAPTAIN AMERICA: CIVIL WAR", tomatoes: "90%", Directors:"Anthony Russo, Joe Russo", starring:"Multiple MCU Actors/Actresses",
    poster: "https://calendarmedia.blob.core.windows.net/assets/335c80f9-3c3a-43bc-b657-1dba6c404a86.jpg",
    link:"https://www.rottentomatoes.com/m/captain_america_civil_war",
    desc:"Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage"},
]

// looping untuk memberikan judul di mainpage
for (let x = 0; x < movies.length; x++){
    document.getElementById(x+1).innerHTML = (x+1) + ". " + movies[x].name;
}

for (let x = 0; x < movies.length; x++){
    document.getElementById("img" + (x+1)).src = movies[x].poster;
}

// saat diclick popup akan aktif dan mengubah data seusai movie yg diclick
function togglePopup(movie_num){
    document.getElementById("popup-1").classList.toggle("active");
    document.getElementById("popup_poster1").src = movies[movie_num-1].poster
    document.getElementById("movie title").innerHTML = movies[movie_num-1].name;
    document.getElementById("tomatoes").innerHTML = "Ratings: " + movies[movie_num-1].tomatoes + " on the Tomatometer";
    document.getElementById("directors").innerHTML = "Directed By: " + movies[movie_num-1].Directors;
    document.getElementById("star").innerHTML = "Starring: " + movies[movie_num-1].starring;
    document.getElementById("desc").innerHTML = "Description: " + movies[movie_num-1].desc;
    document.getElementById("link").href = movies[movie_num-1].link;     

}

// search filter
const list = document.querySelector("#movie-list");
const searchBar = document.forms["search-movies"].querySelector('input')
searchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const movies = list.getElementsByTagName('li');
    Array.from(movies).forEach(function(movie){
        const title = movie.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            movie.style.display = '';
        }
        else{
            movie.style.display = 'none';
        };
    })
})