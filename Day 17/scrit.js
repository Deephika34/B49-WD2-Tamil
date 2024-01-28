fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((ele) => {
    for (i = 0; i < ele.length; i++) {
      
      const div = document.createElement("div");
      div.innerHTML = `<div class="row col-lg-4 col-sm-12">
      <div class="col">
    <div class="card">
    <div class="card-header">${ele[i].name.common}</div>
      <img src="${ele[i].flags.png}" class="card-img-top" alt="API Flags">
      <div class="card-body">
      <p class="card-text">Capital:${ele[i].capital}</p>
      <p class="card-text">Region:${ele[i].region}</p>
      <p class="card-text">Country Code:${ele[i].cca2}</p>
      <p class="card-text" id="latlng">Latlng:${ele[i].latlng}</p>
      <button type="button"class="btn btn-primary" id="btn" onclick="getWeatherData('${ele[i].latlng}')">Click for Weather</button>
    </div>
    </div>
    </div>
  </div>`;

  
  div.className="container"
      document.body.append(div);
    }
  });


    function getWeatherData(restcountries){
const apiKey="480dc2f8765dde22ffee367b92a482ac";
const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${restcountries
}}&appid=${apiKey}`


fetch(weatherUrl)
.then((result) => {
 result.json()})
.then((data) => {


let restcountries = data;
let buttons=document.getElementById("btn");
buttons.addEventListener("click",()=>{

if(restcountries===data.names){
  console.log( `Weather in ${data.names}: ${data.main.temp_min} min:deg && ${data.main.temp_max} max:deg`)
  }
  else{
   console.log( "country name does not match")
  }
  })
  
})
    }