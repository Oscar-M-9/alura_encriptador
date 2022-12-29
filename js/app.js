/* La letra "e" => es convertida para "enter"
La letra "i" => es convertida para "imes"
La letra "a" => es convertida para "ai"
La letra "o" => es convertida para "ober"
La letra "u" => es convertida para "ufat" */
document.getElementById('txt-result').readOnly = "false";
var content = document.getElementById("content");
var txt_result = document.getElementById("txt-result");
var checK_data = document.getElementById('alert-txt');

function checkType(words) {
    words = String(words).trim();
    const regxs = {
        /* /^[a-z]+$/ */
        "lower": /^[a-z0-9\s\?\!]+$/,
    }

    if (regxs.lower.test(words)) return 0;
    return -1;
}


function encriptar() {
    var data = document.getElementById('txt-data').value;
    var txtencriptado = '';
    if (checkType(data) == 0) {
        txtencriptado = data.replace(/e/ig, "enter");
        txtencriptado = txtencriptado.replace(/i/ig, "imes");
        txtencriptado = txtencriptado.replace(/a/ig, "ai");
        txtencriptado = txtencriptado.replace(/o/ig, "ober");
        txtencriptado = txtencriptado.replace(/u/ig, "ufat");
        content.style.display = "none";
        txt_result.innerHTML = txtencriptado;
        txt_result.style.display = "inline-block";
        document.getElementById("c-btn-copiar").style.display = "inline-block";
        document.getElementById('r-copy').style.display = 'none';
        checK_data.style.display = 'none';
        content.classList.remove('animate__animated', 'animate__jackInTheBox');
    } else {
        checK_data.style.display = 'inline-block';
        txt_result.style.display = 'none';
        content.style.display = "inline-block";
        document.getElementById("c-btn-copiar").style.display = "none";
        content.classList.add('animate__animated', 'animate__jackInTheBox');
    }
}

function desencriptar() {
    var data = document.getElementById('txt-data').value;
    var txtencriptado = '';
    if (checkType(data) == 0) {
        txtencriptado = data.replace(/enter/ig, "e");
        txtencriptado = txtencriptado.replace(/imes/ig, "i");
        txtencriptado = txtencriptado.replace(/ai/ig, "a");
        txtencriptado = txtencriptado.replace(/ober/ig, "o");
        txtencriptado = txtencriptado.replace(/ufat/ig, "u");
        content.style.display = "none";
        txt_result.style.display = "inline-block";
        txt_result.innerHTML = txtencriptado;
        document.getElementById("c-btn-copiar").style.display = "inline-block";
        document.getElementById('r-copy').style.display = 'none';
        checK_data.style.display = 'none';
        content.classList.remove('animate__animated', 'animate__jackInTheBox');
    } else {
        checK_data.style.display = 'inline-block';
        txt_result.style.display = 'none';
        content.style.display = "inline-block";
        document.getElementById("c-btn-copiar").style.display = "none";
        content.classList.add('animate__animated', 'animate__jackInTheBox');
    }
}

function copy() {
    txt_result.select();
    document.execCommand('copy');
    document.getElementById('r-copy').innerHTML = 'Copiado!';
    document.getElementById('r-copy').style.display = 'inline-block';
}