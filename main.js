let bubbles = document.querySelector('.bubbles')
for (let i = 1; i <= 37; i++) {
    let box = document.createElement('span')
    box.style = `--i:${Math.floor(Math.random() * 30) + 4};`
    bubbles.appendChild(box)
}

function pixel(){

    let w = 45;
    let h = 30;
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++){
        let span = document.createElement('span')
        let random = Math.random() * 5
        let randomFixed = random.toFixed(2)
        document.getElementById('pixel').appendChild(span)
        span.style.left = j * 10 + 'px'
        span.style.top = i * 10 + 'px'
        span.style.backgroundPosition = -j *10 + 'px ' + -i*10 + 'px, center'
        span.style.animationDelay = randomFixed + 's';
    }
}
}
pixel()