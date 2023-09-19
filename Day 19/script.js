function sub (a,b) {
    try {
        if (b>a) {
throw new Error ("B is Greater then A");
        }
        const result = a - b;
        console.log(result);
    } catch (err) {
        console.error("An error Occured: ", err.message);
    }
}
sub(20,30)





// function sub (a,b) {

// if (b > a) {
//     throw new Error ("B cannot be greater then A");
// }
// return a-b;
// }

// try {
// const result = sub (10,5);
// console.log(result);
// }
// catch(err) {
// console.log("A Error Occured: ", err.message);
// }