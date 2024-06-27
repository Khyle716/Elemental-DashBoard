var gameHBtn = document.getElementById('GamesHBtn');
var gameCon = document.getElementById('game-container');
var gameB = document.getElementById('game-body');
var gameBC = document.getElementById('game-body-container');
var gameExitBtn = document.getElementById('exitGame');
var loading2 = document.getElementById('loading');

gameHBtn.addEventListener('click', function() {
  gameB.style.animation = 'showGameBodyF 2s forwards';
  gameB.style.borderColor = 'white';
  loading2.style.display = 'flex';
  gameBC.style.display = 'none';
  setTimeout(function() {
    gameBC.style.animation = 'showGameBodyChildO 0.5s forwards'
    gameBC.style.display = 'flex';
  }, 3700)
  setTimeout(function() {
    gameCon.style.display = 'flex';
  }, 1999)
  setTimeout(function() {
    loading2.style.display = 'none';
  }, 1999)
})

gameExitBtn.addEventListener('click', function() {
  gameBC.style.animation = 'showGameBodyChildC 0.5s forwards'
  setTimeout(function() {
    gameB.style.animation = 'showGameBodyB 2s forwards';
  }, 200)
  setTimeout(function() {
    gameB.style.borderColor = 'transparent';
  }, 2000)
  setTimeout(function() {
    gameCon.style.display = 'none';
  }, 2100)
})