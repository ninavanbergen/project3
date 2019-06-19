var tekst = document.querySelector('.eerste');
var menu = document.querySelector('nav');
var bar = document.querySelector('.logo');
var knop = document.querySelector('.knopje');
var locaties = document.querySelector('.locatiepunt:nth-of-type(2)');
var venster = document.querySelector('.popup');

bar.addEventListener("click", function(){
  menu.classList.toggle('menuopen')
});

knop.addEventListener("mouseout", function(){
  knop.classList.add('klein')
});

locaties.addEventListener("click", function(){
  venster.classList.toggle('popaan')
});
