
const fetchWeather = '/weather';
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const date = document.getElementById('date');
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');
const city = document.getElementById('city');

date.textContent = new Date();
temperature.textContent = "...";
weather.textContent = "...";
city.textContent = "...";


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    temperature.textContent = "Loading...";
    weather.textContent = "Loading...";
    city.textContent = "Loading...";
    
    const locationApi = fetchWeather+"?address="+search.value;
    fetch(locationApi).then(response=>{
        response.text().then(data =>{
            const result = JSON.parse(data);

            temperature.innerHTML = (result.temperature-273.5).toFixed(2);
            weather.textContent = result.description;
            city.textContent = result.place;
            search.value="";

            
        })
    });
        
        
    });


    
    
    
    
