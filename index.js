
const music = new Audio('song/1.mp3');
music.src = "song/3.mp3"
// music.play();



//--====>>>>>>> Dark mode  day and night

var Day = document.querySelector('.Day');
var Night = document.querySelector('.Night');

let songs_side = document.querySelector('.song-side');
let Music_player = document.querySelector('.Music-player');
let menu_side = document.querySelector('.menu-side');
let bodie = document.querySelector('body');

let playlist = document.querySelector('.playlist');
var ul = document.querySelectorAll('ul')

Day.addEventListener('click', (event) => {

    Night.classList.toggle('active');
    Day.classList.toggle('active');
    songs_side.style.background = "#0b1320";
    songs_side.style.color = "#4c5262";

    // ul[1].style.color="#4c5262"

    Music_player.style.background = "#111727";
    Music_player.style.color = "#4c5262";

    menu_side.style.background = "#111727";
    menu_side.style.color = "#4c5262";


})

Night.addEventListener('click', (event) => {
    Day.classList.toggle('active');
    Night.classList.toggle('active');
    songs_side.style.cssText = 'background:white; color:black'
    // songs_side.style.color="black";
    ul[0].style.color = "black"


    Music_player.style.background = "pink"
    Music_player.style.color = "black";

    menu_side.style.background = "white";
    menu_side.style.color = "black";

})





const songs = [
    {
        id: "1",
        songName: `alan -0ndkkk  <br>
         <div class="subtitle"> Alan Walker`,
        poster: "photos/1.jpeg",
    },
    {
        id: "2",
        songName: `On My way <br>
         <div class="subtitle">Alan Walker`,
        poster: "photos/2.jpg",
    },
    {
        id: "3",
        songName: `jaati hu m<br>
         <div class="subtitle"> Udit narayan `,
        poster: "photos/3.webp",
    },
    {
        id: "4",
        songName: `Blue eyes <br> 
        <div class="subtitle">YO YO Honey singh`,
        poster: "photos/4.webp",
    },
    {
        id: "5",
        songName: `salmaan <br>
         <div class="subtitle"> Udit narayan `,
        poster: "photos/5.webp",
    },
    {
        id: "6",
        songName: `jaane ns paay<br>
         <div class="subtitle"> Udit narayan `,
        poster: "photos/6.webp",
    },
    {
        id: "7",
        songName: `pyar hua h(saruk) <br> 
        <div class="subtitle"> Udit narayan `,
        poster: "photos/7.webp",
    },
    {
        id: "8",
        songName: `lalau <br>
         <div class="subtitle">veer `,
        poster: "photos/8.webp",
    },
    {
        id: "9",
        songName: ` salaam aaya  <br>
         <div class="subtitle"> veer `,
        poster: "photos/9.webp",
    },
    {
        id: "10",
        songName: ` Mi Amor<br> 
        <div class="subtitle"> AP Dhillon `,
        poster: "photos/10.webp",
    },
    {
        id: "11",
        songName: `Mohit <br> 
        <div class="subtitle"> Udit narayan `,
        poster: "photos/11.jpg",
    },
    {
        id: "12",
        songName: `Hight rated <br> 
        <div class="subtitle"> Guru randhawa `,
        poster: "photos/12.webp",
    },
    {
        id: "13",
        songName: `neend aane lagi h  <br>
         <div class="subtitle"> Udit narayan `,
        poster: "photos/13.jpeg",
    },
    {
        id: "14",
        songName: `Ilzaam  <br>
         <div class="subtitle"> Arjun kanpoor`,
        poster: "photos/14.webp",
    },
    {
        id: "15",
        songName: `tere vaaste <br>
         <div class="subtitle"> Udit narayan `,
        poster: "photos/15.webp",
    },

]

// --===>> search start 
let music_result = document.querySelector('.Music_result');

// --===>>> shopw all songs card in search bar
songs.forEach(element => {
    const { id, poster, songName } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    // console.log(card.href);
    card.innerHTML = `<img src="${poster}" alt="">
     <div class="content">
   ${songName}
    </div>`

    // console.log(card.innerHTML)
    music_result.appendChild(card)

})


let input = document.querySelectorAll('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = music_result.querySelectorAll('a');



    for (let index = 0; index < items.length; index++) {
        let cont = items[index].getElementsByClassName('content')[0]

        console.log(cont)

        var text_value = cont.textContent || cont.innerHTML

        // console.log(cont.innerHTML||cont.textContent)



        console.log(text_value.toUpperCase().indexOf(input_value) > -1)
        if (text_value.toUpperCase().indexOf(input_value) > -1) {

            items[index].style.display = "flex";
           


        } else {
            items[index].style.display  = "none";


        }


        if (input_value == 0) {
            items[index].style.display = "none"
        }
        else {
            items[index].style.display = "";
        }
    }
})


// 

// ---=====>> search End








// ====>>>>>>>scrollbar left and right 


let pop_song_left = document.querySelector('#pop_song_left');
let pop_song_right = document.querySelector('#pop_song_right');
let pop_song = document.getElementsByClassName('pop-songs')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 200;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 200;
})


let pop_artist_left = document.querySelector('#pop_artist_left');
let pop_artist_right = document.querySelector('#pop_artist_right');
let pop_art = document.getElementsByClassName('item')[0];


pop_artist_left.addEventListener('click', () => {
    pop_art.scrollLeft -= 200;
})

pop_artist_right.addEventListener('click', () => {
    pop_art.scrollLeft += 200;
})




// Array object data render to the UI


let hhh = Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {

    e.getElementsByTagName('img')[0].src = songs[i].poster;
    let bhg = e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})


let data = Array.from(document.getElementsByClassName('SongItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})





// Master play =======>>>>MAster play

let masterplay = document.querySelector('#masterplay');
let wave = document.querySelector('#wavve');


masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterplay.classList.add('bi-pause-fill');
        masterplay.classList.remove('bi-play-fill');

    } else {
        music.pause();
        wave.classList.toggle('active1');
        masterplay.classList.remove('bi-pause-fill');
        masterplay.classList.add('bi-play-fill');
    }
})
// play song background color

// 1---===>> Menu-song background color when run 
const makermenusongbackground = () => {
    Array.from(document.getElementsByClassName('SongItem')).forEach((e) => {
        e.style.background = 'rgb(105, 105,  105, .0)';
    })
}   

// 2---===>> popular-song background color when run 
const makerpopsongbackground = () => {
    Array.from(document.getElementsByClassName('.songItem')).forEach((e) => {
        e.style.background = "rgb(105,105,105,.0);"
    })
}


// playsong pause and   play

// 1---===>> Menu-song play
const makermenusongplay = () => {
    Array.from(document.getElementsByClassName('playpuaseplay')).forEach((e) => {
        e.classList.add('bi-play-circle-fill');
        e.classList.remove('bi-pause-circle-fill');
    });
}
// 2---===>> popular-song play or pause
const makerpopplay = () => {
    Array.from(document.getElementsByClassName('.SongItem')).forEach((e) => {
        e.classList.add('bi-play-circle-fill');
        e.classList.remove('bi-pause-circle-fill');
    })
}

// ====>>>>> song by id

var index = 0;

let poster_Master_play = document.querySelector('#poster_Master_play');
let playbtn = Array.from(document.getElementsByClassName('playpuaseplay')).forEach((e) => {
    let title = document.getElementById('title');

    // let backimg=document.querySelector('#backimg');

    // download button 
    let download_music = document.querySelector('#download_music');


    e.addEventListener('click', (event) => {
        index = event.target.id;
        console.log(index);
        music.src = `song/${index}.mp3`;
        poster_Master_play.src = `photos/${index}.webp`;
        music.play();
        wave.classList.add('active1');
        masterplay.classList.add('bi-pause-fill');
        masterplay.classList.remove('bi-play-fill');
        download_music.href = `audio/${index}.mp3`;

        // song title render filter konsa song play h 

        let songItem = songs.filter((song) => {
            return song.id == index;

        })



        songItem.forEach(vol => {
            let { songName } = vol;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);

        })
        makermenusongbackground();
        makerpopsongbackground();
        Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = "rgb(105,115,125,.1)";
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,115,125,.1)";


        makermenusongplay();
        // makerpopplay();.
        event.target.classList.add('bi-pause-circle-fill');
        event.target.classList.remove('bi-play-circle-fill');


        makerpopplay();
        event.target.classList.remove('bi-play-circle-fill');
        event.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1')
    })
});




// ----=====>>>current time of song and totle time

// let startTime = document.getElementsByClassName('StartTime');
// let endTime = document.getElementsByClassName('EndTime');


//==--==>>>> master play fetch   bar slider jiss aaga picha karta h 
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('Dot');






// 
music.addEventListener('timeupdate', () => {
    var music_current = music.currentTime;
    var music_dur = music.duration;
    // console.log(music_current);
    // console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let second1 = Math.floor(music_dur % 60);
    if (second1 < 10) {
        second1 = `0${second1}`;
    }
    (document.querySelector('#currentEnd')).innerText = `${min1}:${second1}`;

    let min2 = Math.floor(music_current / 60);
    let second2 = Math.floor(music_current % 60);
    if (second2 < 10) {
        second2 = `0${second2}`;
    }
    (document.querySelector('#currentTime')).innerText = `${min2}:${second2}`;


    //===>>>>>>>> song bar 
    let progressbar = parseInt((music_current / music_dur) * 100);
    seek.value = progressbar;
    // console.log(progressbar);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})



// slider sa song aaga picha karna 
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;

})


// volume range increase or decrease
let volIcon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let volbar = document.querySelector('.volbar');
let voldot = document.getElementById('vol-Dot');



//===>>> Volume  status show

vol.addEventListener('change', () => {

    if (vol.value == 0) {
        volIcon.classList.add('bi-volume-off');
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
    }
    if (vol.value > 0) {
        volIcon.classList.remove('bi-volume-off');
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.add('bi-volume-down-fill');
    }
    if (vol.value > 50) {
        volIcon.classList.remove('bi-volume-off');
        volIcon.classList.add('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
    }
    let volvalue = vol.value;
    // volbar.style.width=`${volvalue}%`;
    volbar.style.width = `${volvalue}%`;
    voldot.style.left = `${volvalue}%`
    music.volume = volvalue / 100;

})



let back = document.getElementById('back');
let next = document.getElementById('next');
// index = Array.from(document.getElementsByClassName('songItem')).length;


back.addEventListener('click', (event) => {
    index -= 1;
    if (index > 1) {
        index = Array.from(document.getElementsByClassName('SongItem')).length;

    }
    console.log(index);


    music.src = `song/${index}.mp3`;
    poster_Master_play.src = `photos/${index}.webp`;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.add('bi-pause-fill');
    masterplay.classList.remove('bi-play-fill');


    let songItem = songs.filter((song) => {
        return song.id == index;

    })

    songItem.forEach(vol => {
        let { songName } = vol;
        title.innerHTML = songName;
    })
    makermenusongbackground();
    makerpopsongbackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = "rgb(105,115,125,.1)";
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,115,125,.1)";


    makermenusongplay();
    // makerpopplay();.
    event.target.classList.add('bi-pause-circle-fill');
    event.target.classList.remove('bi-play-circle-fill');


    makerpopplay();
    event.target.classList.remove('bi-play-circle-fill');
    event.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1')
})


next.addEventListener('click', (event) => {

    index++;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('SongItem')).length;
        index = 1;


    };
    console.log("right" + " " + index)


    music.src = `song/${index}.mp3`;
    poster_Master_play.src = `photos${index}.webp`;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.add('bi-pause-fill');
    masterplay.classList.remove('bi-play-fill');


    let songItem = songs.filter((song) => {
        return song.id == index;

    })

    songItem.forEach(vol => {
        let { songName } = vol;
        title.innerHTML = songName;
    })
    makermenusongbackground();
    makerpopsongbackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = "rgb(105,115,125,.1)";
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,115,125,.1)";


    makermenusongplay();
    // makerpopplay();.
    event.target.classList.add('bi-pause-circle-fill');
    event.target.classList.remove('bi-play-circle-fill');


    makerpopplay();
    event.target.classList.remove('bi-play-circle-fill');
    event.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1')
})




var shuffle = document.querySelector('.shuffle');



// ======----->>> add repeat shuffle next
shuffle.addEventListener('click', (event) => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            {
                shuffle.classList.add('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle')
                shuffle.innerHTML = "repeat";
            }
            break;

        case "repeat":
            {
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.remove('bi-music-note-beamed');
                shuffle.classList.add('bi-shuffle');
                shuffle.innerHTML = "shuffle";

            }
            break;
        case "shuffle":
            {
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = "next";
            }
            break;


        default:
            break;
    }
})


music.addEventListener('ended', (event) => {
    if (index == songs.length) {
        index = 1;

    } else {
        index++;

    }
    // index++;
    music.src = `song/${index}.mp3`;
    poster_Master_play.src = `photos/${index}.webp`;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.add('bi-pause-fill');
    masterplay.classList.remove('bi-play-fill');
    download_music.href = `audio/${index}.mp3`;

    // song title render filter konsa song play h 

    let songItem = songs.filter((song) => {
        return song.id == index;

    })



    songItem.forEach(vol => {
        let { songName } = vol;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);

    })
    makermenusongbackground();
    makerpopsongbackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = "rgb(105,115,125,.1)";
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,115,125,.1)";


    makermenusongplay();
    // makerpopplay();.
    event.target.classList.add('bi-pause-circle-fill');
    event.target.classList.remove('bi-play-circle-fill');


    makerpopplay();
    event.target.classList.remove('bi-play-circle-fill');
    event.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1')

})


const next_music = () => {
    index++;
    music.src = `song/${index}.mp3`;
    poster_Master_play.src = `photos/${index}.webp`;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.add('bi-pause-fill');
    masterplay.classList.remove('bi-play-fill');
    download_music.href = `audio/${index}.mp3`;

    // song title render filter konsa song play h 

    let songItem = songs.filter((song) => {
        return song.id == index;

    })
    songItem.forEach(vol => {
        let { songName } = vol;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);

    })
    makermenusongbackground();
    makerpopsongbackground();
    Array.from(document.getElementsByClassName('SongItem'))[index - 1].style.background = "rgb(105,115,125,.1)";
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,115,125,.1)";


    makermenusongplay();
    // makerpopplay();.
    event.target.classList.add('bi-pause-circle-fill');
    event.target.classList.remove('bi-play-circle-fill');


    makerpopplay();
    event.target.classList.remove('bi-play-circle-fill');
    event.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1')

}

