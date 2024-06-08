const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const email = urlParams.get('email');
document.write('<div class="wlcm"> your name is : ' + username + '</div>');
document.write('<div class="wlcm"> your email is : ' + email + '</div>');