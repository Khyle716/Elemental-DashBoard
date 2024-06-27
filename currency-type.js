var forwardBtn = document.getElementById('forwardBtn');
var backBtn = document.getElementById('backBtn');

var loading2 = document.getElementById('loading');

forwardBtn.addEventListener('click', function() {
  loading2.style.display = 'flex';
  setTimeout(function() {
    window.location.href = '/Water/water.html';
  }, 1000)
  setTimeout(function() {
    loading2.style.display = 'none';
  }, 1000)
})

backBtn.addEventListener('click', function() {
  loading2.style.display = 'flex';
  setTimeout(function() {
    window.location.href = '/Light/light.html';
  }, 1000)
  setTimeout(function() {
    loading2.style.display = 'none';
  }, 1000)
})