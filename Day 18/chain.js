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
asyncTask1() .then ((val) => {
    console.log(val);
    return asyncTask2();
})
.then((val) => {
    console.log(val);
    return asyncTsk3();
})
.then((val) => {
    console.log(val);
    console.log("All Task is Completed");
})

.catch((err)=> {
    console.log("Error: " + err)
}
)
