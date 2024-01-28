fetch("https://holidays.abstractapi.com/v1/?api_key=1a95fb9e529747b19a112c2739d84f27&country=sg&year=2023&month=8&day=9")
  .then((data) => data.json())
  .then((result) =>console.log(result))
  .catch((error)=>console.log(error));


 // I tried to display result in html page but its not working

// fetch("https://holidays.abstractapi.com/v1/?api_key=1a95fb9e529747b19a112c2739d84f27&country=sg&year=2023&month=8&day=9")
//   .then((data) => data.json())
//   .then((result) => {
// const div=document.createElement("div")
// div.innerHTML=result;
// document.body.append(div)
//   })
//   .catch((error) => console.error(error));

  