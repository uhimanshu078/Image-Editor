function demo(){
    const file = document.getElementById('imageUpload').value.replace(/.*(\/|\\)/, '');
const box = document.getElementById('box');
box.src= file
}


function brightness(){
    var range = document.getElementById('brightness').value;
    var img = document.getElementById('box');
    img.style.filter = "brightness("+range+"%)";
}

function contrast(){
    var range = document.getElementById('contrast').value;
    var img = document.getElementById('box');
    img.style.filter = "contrast("+range+"%)";
}

function saturation(){
    var range = document.getElementById('saturation').value;
    var img = document.getElementById('box');
    img.style.filter = "saturate("+range+"%)";
}

