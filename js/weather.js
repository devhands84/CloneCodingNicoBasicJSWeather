navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);
function onGeoSuccess(event){
    console.log('Geolocation Success', event);
    const lat = event.coords.latitude;
    const lon = event.coords.longitude;
    const weatherKey = localStorage.getItem('weatherKey');
    if(weatherKey){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`;
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            document.getElementById('weather').innerText = data.weather[0].main;
            document.getElementById('city').innerText = data.name;
        });
    }    
}

function onGeoFailure(error){
    console.log('Geolocation Failure', error); 
}  