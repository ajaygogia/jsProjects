let city = ''
let API = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
let APIID = '&appid=46d47581a51a79782741111953e700af'
document.getElementById('display').style.display = 'none'
document.getElementById('error').style.display = 'none'

function getCity(e) {
    city = document.querySelector('#city').value
    if (e.keyCode == 13 && city != '') {
        this.getWeather()
    }
}

function getWeather() {
    let sky
    let promise = fetch(API + document.querySelector('#city').value + APIID)
    promise.then((resolve, reject) => {
        if (resolve.status == 200) {
            document.getElementById('display').style.display = ''
            document.getElementById('error').style.display = 'none'
            return resolve.json()
        } else {
            document.getElementById('display').style.display = 'none'
            document.getElementById('error').style.display = ''
        }
    })
        .then(res => {
            if (res && res.cod == 200) {
                console.log(res)
                document.getElementById('temp').innerHTML = Math.round(res.main.temp) + '°C'
                document.getElementById('place').innerHTML = city.toUpperCase();
                sky = res.weather[0].main
                if (sky.toLowerCase() == 'clear') {
                    document.getElementById('sky').src = 'sunny.png'
                } else if (sky.toLowerCase() == 'haze') {
                    document.getElementById('sky').src = 'haze.png'
                } else {
                    document.getElementById('sky').src = 'cloud.png'
                }
                document.getElementById('windspeed').innerHTML = res.wind.speed + ' km/h'
                document.getElementById('humidity').innerHTML = res.main.humidity + '%'
            }
        })
        .catch(err => {
            console.log(err)
        })
}

