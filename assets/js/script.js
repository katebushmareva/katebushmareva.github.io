let first_card = document.getElementById("card-1");
let second_card = document.getElementById("card-2");
let third_card = document.getElementById("card-3");
let fourth_card = document.getElementById("card-4");
let fourth_card_logo = document.getElementById("logo");
let info_1_flag = false;
let info_2_flag = false;
let info_3_flag = false;
var audio = new Audio('assets/audio/shibuya-marble-texture.mp3');
let audio_flag = false;
audio.volume = 0.2;
let fourth_card_text = document.getElementById("card-text-4");
let main_logo = document.getElementById("logo-main");

var waypoint_0 = new Waypoint({
  element: document.getElementById("logo-main"),
  handler: function(direction) {
    if (direction == "down") {
      this.element.style.animation = "slide-in-logo";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 700
})

var waypoint_1 = new Waypoint({
  element: document.getElementById("card-1"),
  handler: function(direction) {
    if (direction == "down") {
      this.element.style.animation = "slide-in-left";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 600
})

var waypoint_2 = new Waypoint({
  element: document.getElementById("card-2"),
  handler: function(direction) {
    if (direction == "down"){
      this.element.style.animation = "slide-in-right";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 600
})

var waypoint_3 = new Waypoint({
  element: document.getElementById("card-3"),
  handler: function(direction) {
    if (direction == "down"){
      this.element.style.animation = "slide-in-left";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 600
})

var waypoint_4 = new Waypoint({
  element: document.getElementById("card-4"),
  handler: function(direction) {
    if (direction == "down"){
      this.element.style.animation = "slide-in-right";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 600
})

var waypoint_5 = new Waypoint({
  element: document.getElementById("card-1"),
  handler: function(direction) {
    if (direction == "up") {
      this.element.style.animation = "slide-out-left";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 300
})

var waypoint_6 = new Waypoint({
  element: document.getElementById("card-2"),
  handler: function(direction) {
    if (direction == "up") {
      this.element.style.animation = "slide-out-right";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 300
})

var waypoint_7 = new Waypoint({
  element: document.getElementById("card-3"),
  handler: function(direction) {
    if (direction == "up") {
      this.element.style.animation = "slide-out-left";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 300
})

var waypoint_8 = new Waypoint({
  element: document.getElementById("card-4"),
  handler: function(direction) {
    if (direction == "up") {
      this.element.style.animation = "slide-out-right";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 300
})

var waypoint_9 = new Waypoint({
  element: document.getElementById("logo-main"),
  handler: function(direction) {
    if (direction == "up") {
      this.element.style.animation = "slide-out-logo";
      this.element.style["animation-fill-mode"] = "forwards";
      this.element.style["animation-duration"] = "1.5s";
      this.element.style["animation-timing-function"] = "ease-in-out";
    }
  },
  offset: 400
})



function show_info() {
  if (this == first_card){
    let first = document.getElementById("info-1").getElementsByClassName("info-name")[0];
    let second = document.getElementById("info-1").getElementsByClassName("info-top")[0];
    let third = document.getElementById("info-1").getElementsByClassName("info-bot")[0];
    let items = [first, second, third];
    let pic = document.getElementById("photo-1");
    pic.style["transition-duration"] = "1s";
    pic.style["background-image"] = "url('assets/css/photo-1-click.png')";
    for (let i = 0; i < items.length; i++) {
      let current = items[i];
      current.style.animation = "fade-in";
      current.style["animation-duration"] = "1s";
      current.style["animation-fill-mode"] = "forwards";
      if (i == 0) {
        current.style["animation-delay"] = ".5s";
      } else if (i == 1){
        current.style["animation-delay"] = "1s";
      } else {
        current.style["animation-delay"] = "1.5s";
      }
    }
    info_1_flag = true;
  } else if (this == second_card) {
    let first = document.getElementById("info-2").getElementsByClassName("info-name")[0];
    let second = document.getElementById("info-2").getElementsByClassName("info-top")[0];
    let third = document.getElementById("info-2").getElementsByClassName("info-bot")[0];
    let items = [first, second, third];
    let pic = document.getElementById("photo-2");
    pic.style["transition-duration"] = "1s";
    pic.style["background-image"] = "url('assets/css/photo-2-click.png')";

    for (let i = 0; i < items.length; i++) {
      let current = items[i];
      current.style.animation = "fade-in";
      current.style["animation-duration"] = "1s";
      current.style["animation-fill-mode"] = "forwards";
      if (i == 0) {
        current.style["animation-delay"] = ".5s";
      } else if (i == 1){
        current.style["animation-delay"] = "1s";
      } else {
        current.style["animation-delay"] = "1.5s";
      }
    }
    info_2_flag = true;
  } else if (this == third_card) {
    let first = document.getElementById("info-3").getElementsByClassName("info-name")[0];
    let second = document.getElementById("info-3").getElementsByClassName("info-top")[0];
    let third = document.getElementById("info-3").getElementsByClassName("info-bot")[0];
    let items = [first, second, third];
    let pic = document.getElementById("photo-3");
    pic.style["transition-duration"] = "1s";
    pic.style["background-image"] = "url('assets/css/photo-3-click.png')";
    for (let i = 0; i < items.length; i++) {
      let current = items[i];
      current.style.animation = "fade-in";
      current.style["animation-duration"] = "1s";
      current.style["animation-fill-mode"] = "forwards";
      if (i == 0) {
        current.style["animation-delay"] = ".5s";
      } else if (i == 1){
        current.style["animation-delay"] = "1s";
      } else {
        current.style["animation-delay"] = "1.5s";
      }
    }
    info_3_flag = true;
  } else if (this == fourth_card){
    let logo = document.getElementById("logo")
    logo.style["transition-duration"] = "1s";
    logo.style.animation = "fade-in";
    logo.style["animation-duration"] = "1s";
    logo.style["animation-fill-mode"] = "forwards";
    logo.style.opacity = 1;
    let text = document.getElementById("card-text-4");
    text.style["text-decoration"] = "underline";
  }
  audio.play();
  /*if (audio_flag == false) {
    audio.play();
    audio_flag = true;
  }*/
}

function hide_info() {
  if ((this == first_card) && (info_1_flag==true)){
    let first = document.getElementById("info-1").getElementsByClassName("info-bot")[0];
    let second = document.getElementById("info-1").getElementsByClassName("info-top")[0];
    let third = document.getElementById("info-1").getElementsByClassName("info-name")[0];
    let items = [first, second, third];
    let pic = document.getElementById("photo-1");
    pic.style["transition-duration"] = "1s";
    pic.style["background-image"] = "url('assets/css/photo-1.png')";
    for (let i = 0; i < items.length; i++) {
      let current = items[i];
      current.style.animation = "fade-out";
      current.style["animation-fill-mode"] = "forwards";
      if (i == 0) {
        current.style["animation-duration"] = "1s";
      } else if (i == 1){
        current.style["animation-duration"] = "1.5s";
      } else {
        current.style["animation-duration"] = "2s";
      }
    }
  } else if ((this == second_card) && (info_2_flag==true)) {
    let first = document.getElementById("info-2").getElementsByClassName("info-bot")[0];
    let second = document.getElementById("info-2").getElementsByClassName("info-top")[0];
    let third = document.getElementById("info-2").getElementsByClassName("info-name")[0];
    let items = [first, second, third];
    let pic = document.getElementById("photo-2");
    pic.style["transition-duration"] = "1s";
    pic.style["background-image"] = "url('assets/css/photo-2.png')";
    for (let i = 0; i < items.length; i++) {
      let current = items[i];
      current.style.animation = "fade-out";
      current.style["animation-fill-mode"] = "forwards";
      if (i == 0) {
        current.style["animation-duration"] = "1s";
      } else if (i == 1){
        current.style["animation-duration"] = "1.5s";
      } else {
        current.style["animation-duration"] = "2s";
      }
    }
  } else if ((this == third_card) && (info_3_flag==true)) {
    let first = document.getElementById("info-3").getElementsByClassName("info-bot")[0];
    let second = document.getElementById("info-3").getElementsByClassName("info-top")[0];
    let third = document.getElementById("info-3").getElementsByClassName("info-name")[0];
    let items = [first, second, third];
    let pic = document.getElementById("photo-3");
    pic.style["transition-duration"] = "1s";
    pic.style["background-image"] = "url('assets/css/photo-3.png')";
    for (let i = 0; i < items.length; i++) {
      let current = items[i];
      current.style.animation = "fade-out";
      current.style["animation-fill-mode"] = "forwards";
      if (i == 0) {
        current.style["animation-duration"] = "1s";
      } else if (i == 1){
        current.style["animation-duration"] = "1.5s";
      } else {
        current.style["animation-duration"] = "2s";
      }
    }
  } else if (this == fourth_card){
    let logo = document.getElementById("logo")
    logo.style["transition-duration"] = "1s";
    logo.style.animation = "fade-out";
    logo.style["animation-duration"] = "1s";
    logo.style["animation-fill-mode"] = "forwards";
    logo.style.opacity = 0;
    let text = document.getElementById("card-text-4");
    text.style["text-decoration"] = "none";
  }
}

function to_spotify() {
  window.location = "https://open.spotify.com/playlist/4rBHJpkuXs15F68xkcwJay?si=e5650b222c4647ff";
}

first_card.onclick = show_info;
second_card.onclick = show_info;
third_card.onclick = show_info;
first_card.onmouseleave = hide_info;
second_card.onmouseleave = hide_info;
third_card.onmouseleave = hide_info;
fourth_card.onmouseover = show_info;
fourth_card.onmouseleave = hide_info;
fourth_card_logo.onclick = to_spotify;
fourth_card_text.onclick = to_spotify;
