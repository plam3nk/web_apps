window.addEventListener('load', solve)

function solve() {
    container = document.querySelector('.container')
    notFoundBox = document.getElementsByClassName('not-found')[0];
    weatherBox = document.getElementsByClassName('weather-box')[0];
    weatherDetails = document.getElementsByClassName('weather-details')[0];
    searchBtn = document.getElementsByTagName('button')[0];
    searchBtn.addEventListener('click', () =>{
        const APIKey = '8313a8388b74da7e36e6710cd86b7f15'
        const city = document.getElementById('city').value;

        if (city === '') {
            return;
        }

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none'
                notFoundBox.style.display = 'block'
                notFoundBox.classList.add('fadeIn')
                return;
            }

            notFoundBox.style.display = 'none';
            notFoundBox.classList.remove('fadeIn');
            weatherBox.style.display = 'block';
            weatherDetails.style.display = 'flex';

            const image = document.querySelector('.weather-box img');
            const [temperature, description] = document.querySelectorAll('.weather-box p');
            const [humidity, wind] = document.querySelectorAll('.text span');
 
            temperature.innerHTML = '';
            description.innerHTML = '';

            switch(json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Clouds': 
                    image.src = 'images/clouds.png';
                    break;
                case 'Haze': 
                    image.src = 'images/haze.png';
                    break;
                case 'Rain': 
                    image.src = 'images/rainy.jpg';
                    break;
                case 'Snow': 
                    image.src = 'images/snow.png';
                    break;

                default:
                    image.src = '';
            }

            const spanTemp = document.createElement('span');
            spanTemp.textContent = `${Number(json.main.temp).toFixed(0)}°C`;
            temperature.appendChild(spanTemp)

            const spanDescription = document.createElement('span');
            spanDescription.textContent = json.weather[0].description;

            description.appendChild(spanDescription)

            humidity.textContent = json.main.humidity + '%';

            wind.textContent = json.wind.speed + 'Km/h';
        })
    })
}