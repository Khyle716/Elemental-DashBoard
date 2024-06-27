var tradeHBtn = document.getElementById('TradeHBtn');
var tradeCon = document.getElementById('trade-container');
var tradeB = document.getElementById('trade-body');
var tradeBC = document.getElementById('trade-body-container');
var tradeExitBtn = document.getElementById('exitTrade');
var loading1 = document.getElementById('loading');

tradeHBtn.addEventListener('click', function() {
  tradeB.style.animation = 'showTradeBodyF 2s forwards';
  tradeB.style.borderColor = 'white';
  loading1.style.display = 'flex';
  tradeBC.style.display = 'none';
  setTimeout(function() {
    tradeBC.style.animation = 'showTradeBodyChildO 0.5s forwards';
    tradeBC.style.display = 'flex';
  }, 3700)
  setTimeout(function() {
    tradeCon.style.display = 'flex';
  }, 1999)
  setTimeout(function() {
    loading1.style.display = 'none';
  }, 1999)
})

tradeExitBtn.addEventListener('click', function() {
  tradeBC.style.animation = 'showTradeBodyChildC 0.5s forwards'
  setTimeout(function() {
    tradeB.style.animation = 'showTradeBodyB 2s forwards';
  }, 200)
  setTimeout(function() {
    tradeB.style.borderColor = 'transparent';
  }, 2000)
  setTimeout(function() {
    tradeCon.style.display = 'none';
  }, 2100)
})