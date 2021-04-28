var listMail = [ "paolo@mail.com", "mela@mail.com", "maria@mail.com", "test@mail.it",  "gino@mail.it", "pippo@mail.com" ];

var askMail = prompt('inserisci mail');

for ( var i = 0; i < listMail.length; i++) {
    // console.log(listMail[i]);
    if (askMail === listMail[i] ) {
        console.log('ok');
        document.getElementById('result').innerHTML = "ok";
        break;
    } else {
        console.log('NO');
        document.getElementById('result').innerHTML = "no";
    }
}
