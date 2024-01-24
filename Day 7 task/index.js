var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status <= 300) {
    let datas = JSON.parse(this.response);
    console.log(datas);

    // Using filter function to get all countries from Asia
    const asia = datas.filter(function (data) {
      if (data.continents == "Asia") {
        console.log(data.name.common);
      }
    });

    // population less .than 2 lakhs
    const population = datas.filter(function (data) {
      if (data.population < 200000) {
        console.log(data.name.common);
      }
    });

    // Using forEach to get name, capital and flag

    const details = datas.forEach((data) => {
      console.log(data.name);
      console.log(data.capital);
      console.log(data.flags);
    });

    // total population of countries using reduced

    const totalPopulation = datas.reduce(function (total, data) {
      console.log(total + data.population);
    }, 0);

    // print countries which has us dollars has currency values

    const dollar = datas.filter(function (data) {
      if (data.currencies.USD) {
        console.log(data.name.common);
      }
    });
  }
};