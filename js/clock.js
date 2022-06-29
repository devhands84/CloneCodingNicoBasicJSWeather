const clock = document.querySelector('#clock');
paintingTime(); 
setInterval(paintingTime, 1000);

function paintingTime(){
    const time = new Date();
    const hour = time.getHours().toString().padStart(2,'0');
    const minute = time.getMinutes().toString().padStart(2,'0');
    const second = time.getSeconds().toString().padStart(2,'0');
    clock.innerText = `${hour}:${minute}:${second}`;
}
