let promiseObj = new Promise((resolve,reject)=>{
    console.log("Gretting the product history from DB");
    setTimeout(()=> {
        // resolve("6 months of purchased products");
        reject("Error Occured");
    },4000);
}
);
console.log(promiseObj);