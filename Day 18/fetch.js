async function fetchData() {
    const url = "https://restcountries.com/v3.1/all";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Data Fetched Successfully: ", data);
    }
    catch (err) {
        console.log("Error Fetching Data: ",err);

    }
    }
    fetchData();







// const url = "https://restcountriess.com/v3.1/all";

// fetch (url)
// .then ((response)=> {
//     if (response.status === 200) {
//     return response.json();
//     }
//     else{
//         console.log("Response not access");
//     }
// })

// .then ((data)=> {
//     console.log("Data: " , data);
// })
// .catch((err)=> {
//     console.log("Error:" ,err);
// });