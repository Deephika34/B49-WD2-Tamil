var xhr = new XMLHttpRequest();
var method =  "GET";
xhr.open(method,"https://restcountries.com/v3.1/all");
   

xhr.onload = function(){
if (xhr.status==200) {
var details = JSON.parse(xhr.responseText);
var arrObj = details.entries;
console.log(details.entries);
for (var i=0; i<arrObj.length; i++) {
    if (details[i].currencies != undefined) {
        Object.keys (details[i].currencies) . forEach((key)=> {
            if(key=="USD")
            console.log(key,details[i].currencies[key]);
        });
    }
}
} 
}