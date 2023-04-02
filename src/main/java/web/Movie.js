
document.querySelector(".back").addEventListener("click", goBack, false);
document.querySelector(".next").addEventListener("click", goNext, false);

var player = document.querySelector("#videoPlayer");
var movieTitle = document.querySelector(".movieTitle");

var movies = ["Movie%20Trailers/fastandfurious-trailer.mov",
    "Movie%20Trailers/Godfather-trailer.mov",
    "Movie%20Trailers/huntforthewilderpeople-trailer.mov",
    "Movie%20Trailers/meninblack3-trailer.mov",
    "Movie%20Trailers/sherlockholmes2-trailer.mov"];

var titles = ["Fast and Furious", "Godfather", "Hunt for the Wilderpeople", "Men in Black 3", "Sherlock Holmes 2"];

var posters = document.querySelectorAll(".poster");
posters.forEach(function (item, index) {
    item.addEventListener("click", function() {
        player.src = movies[index];
        player.load();
        movieTitle.innerHTML = titles[index];
    })
})

function goBack() {

    for (var i = 0; i < movies.length; i ++) {

        if (player.currentSrc.endsWith(movies[i])) {
            if (i === 0) {
                player.src = movies[movies.length - 1];
                player.load();
                movieTitle.innerHTML = titles[movies.length - 1];
            } else {
                player.src = movies[i-1];
                player.load();
                movieTitle.innerHTML = titles[i-1];
            }
            break;
        }
    }
}

function goNext() {

    for (var i = 0; i < movies.length; i ++) {

        if (player.currentSrc.endsWith(movies[i])) {
            if (i === movies.length - 1) {
                player.src = movies[0];
                player.load();
                movieTitle.innerHTML = titles[0];
            } else {
                player.src = movies[i+1];
                player.load();
                movieTitle.innerHTML = titles[i+1];
            }
            break;
        }
    }
}

function playOrPause() {
    player.paused === true ? player.play() : player.pause();
}

function volumeUp() {
    var vol = 0.1;
    if (player.muted === true) {
        player.muted = false;
        player.volume = vol;
    }
    player.volume < 0.9 ? player.volume += vol : player.volume = 1;
}

function volumeDown() {
    var vol = 0.1;
    player.volume > 0.1 ? player.volume -= vol : player.volume = 0;
}

function mute() {
    if (player.muted === true) {
        player.muted = false;
    } else {
        player.muted = true;
    }

}

function fullScreen() {
    if(player.requestFullScreen) {
        player.requestFullScreen();
    } else if(player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
    } else if(player.webkitRequestFullScreen) {
        player.webkitRequestFullScreen();
    }
}

function playAll() {
    player.play();
    player.addEventListener("ended", goNext, false);
}

