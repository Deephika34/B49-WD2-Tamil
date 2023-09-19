function asyncTask1 () {
    return new Promise((resolve) => {
setTimeout(()=> {
    resolve("Task1 is completed");
},2000);
    });
}

function asyncTask2 () {
    return new Promise(( reject) => {
        setTimeout(()=> {
            reject("Error Occured");
        }, 3000);
    });
}

function asyncTsk3 () {
    return new Promise((resolve) => {
        setInterval (()=> {
            resolve("Task3 is completed");
        }, 4000);
        
    })
}

Promise.all([asyncTask1(),asyncTask2(),asyncTsk3()])
.then((val) => {
    console.log(val);
})
.catch((err)=> {
    console.log(err);
})
