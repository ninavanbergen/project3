var spelen = document.querySelector('.speel');
var intro = document.getElementById('introtekstuit');
var bolbird = document.getElementById('bolvogel');
var vogeltekst = document.getElementById('voeren');
var bolboat = document.getElementById('bolboot');
var boattekst = document.getElementById('hut');
var laag = document.querySelector('.laagtekst');
var titel = document.querySelector('.titeltekst');
var bolfish = document.getElementById('bolvissen');
var tekstvis = document.getElementById('vissen');
var wijsnormaal = document.querySelector('.wijs');
var wijsbeneden = document.querySelector('.wijsb');
var boltot = document.querySelector('.bolalle');
var bolhut = document.getElementById('bolhutje')
var hutjestekst = document.getElementById('huttekst');
var glowbird = document.querySelector('.vogelglow');
var glowvis = document.querySelector('.visglow');
var glowhuis = document.querySelector('.hutglow');
var vogelsound = document.querySelector('.vogeltje');
// var audio = document.querySelector('.geluid');

spelen.addEventListener("click", function(){
  intro.classList.toggle('introaan')
  laag.classList.toggle('laagaan')
  titel.classList.toggle('titeltekstweg')
  boltot.classList.toggle('bolshow')
});

bolbird.addEventListener("click", function(){
  vogeltekst.classList.toggle('introaan')
  glowbird.classList.toggle('glowaan')
});

bolboat.addEventListener("click", function(){
  boattekst.classList.toggle('introaan')
});

bolfish.addEventListener("click", function(){
  tekstvis.classList.toggle('introaan')
  wijsnormaal.classList.toggle('wijsuit')
  wijsbeneden.classList.toggle('wijsbaan')
  glowvis.classList.toggle('glowaan')
});

bolhut.addEventListener("click", function(){
  hutjestekst.classList.toggle('introaan');
  glowhuis.classList.toggle('glowaan')
});

// function myPlay(){
//        var audio = new Audio("Styles/vogelgeluid.mp3");
//        audio.play();
// }
//
// var promise = document.querySelector('.geluid').play();
//
// if (promise !== undefined) {
//   promise.then(_ => {
//     promise.play();
//   }).catch(error => {
//     console.log(hoi)
//   });
//
// }
//
// bolbird.addEventListener("onclick", myPlay());
