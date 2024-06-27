var profileHBtn = document.getElementById('ProfileHBtn');
var profileCon = document.getElementById('profile-container');
var profileB = document.getElementById('profile-body');
var profileBC = document.getElementById('profile-body-container');
var profileExitBtn = document.getElementById('exitProfile');
var loading4 = document.getElementById('loading');

profileHBtn.addEventListener('click', function() {
  profileB.style.animation = 'showProfileBodyF 2s forwards';
  profileB.style.borderColor = 'white';
  loading4.style.display = 'flex';
  profileBC.style.display = 'none';
  setTimeout(function() {
    profileBC.style.animation = 'showProfileBodyChildO 0.5s forwards';
    profileBC.style.display = 'flex';
  }, 3700)
  setTimeout(function() {
    profileCon.style.display = 'flex';
  }, 1999)
  setTimeout(function() {
    loading4.style.display = 'none';
  }, 1999)
})

profileExitBtn.addEventListener('click', function() {
  profileBC.style.animation = 'showProfileBodyChildC 0.5s forwards'
  setTimeout(function() {
    profileB.style.animation = 'showProfileBodyB 2s forwards';
  }, 200)
  setTimeout(function() {
    profileB.style.borderColor = 'transparent';
  }, 2000)
  setTimeout(function() {
    profileCon.style.display = 'none';
  }, 2100)
})