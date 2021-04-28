var user = Math.floor(Math.random() * 6) + 1;
console.log(user);
document.getElementById('user').innerHTML = "User number " + user;

var opponent = Math.floor(Math.random() * 6) + 1;
console.log(opponent);
document.getElementById('opponent').innerHTML = "Opponent number " + opponent;

if (user > opponent) {
    document.getElementById('result').innerHTML = "User higher";
} else if (user < opponent) {
    document.getElementById('result').innerHTML = "Opponent higher";
} else {
    document.getElementById('result').innerHTML = "Even";
}