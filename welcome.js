const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const email = urlParams.get('email');
document.write('<h1> your name is : ' + username + '</h1>');
document.write('<h1> your email is : ' + email + '</h1>');