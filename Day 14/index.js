const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
setInterval(()=> {
    window.scrollBy(0,100);
},4000);

// window.scrollTo(0,0);

console.log("window Width is ", windowWidth);
console.log("Window Height is ", windowHeight);
window.open("https://medium.com/geekculture/learn-css-by-playing-games-cf70a79a38", "_blank");
// window.close();
console.log("current URL:" ,window.location.href);