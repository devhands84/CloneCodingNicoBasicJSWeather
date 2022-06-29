const images = ['0.jpg', '1.jpg', '2.jpg'];
const currentImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');
bgImage.src = `img/${currentImage}`;
qoute.innerText = todayQoute.qoute;
document.body.appendChild(bgImage);