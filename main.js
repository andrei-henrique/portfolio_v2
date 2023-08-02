// Arquivo: main.js

function copyEmailToClipboard() {
    var emailButton = document.getElementById("copyButton");
    var emailText = emailButton.innerText;

    var aux = document.createElement("input");
    aux.setAttribute("value", emailText);
    document.body.appendChild(aux);
    aux.select();

    document.execCommand("copy");
    document.body.removeChild(aux);

    emailButton.innerText = "Email copiado";
    setTimeout(function() {
    emailButton.innerText = emailText;
    }, 2000);
}

var button = document.getElementById("copyButton");
button.addEventListener("click", copyEmailToClipboard);

function downloadCV() {
    var filename = "Profile.pdf";
    var element = document.createElement('a');
    element.setAttribute('href', filename);
    element.setAttribute('download', 'Profile.pdf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


