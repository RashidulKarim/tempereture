const getInput = () =>{
        const searchFeild = document.getElementById('searchFeild');
        const searchData = searchFeild.value;
        searchFeild.value = ''
        loadApi(searchData)
}

const loadApi =async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5fda5e3830fab9f563d83c02fb262e5&units=metric`
    const res = await fetch(url);
    const data =await res.json();
    showData(data)
}

const showData = data => {
console.log(data);
const weartherImg = document.getElementById('weather-img');
weartherImg.src =`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`
const cityName = document.getElementById('cityName');
const weather = document.getElementById('weather');
weather.innerText = data.main.temp;
cityName.innerText = data.name;
const description = document.getElementById('description');
description.innerText = data?.weather[0]?.main
}