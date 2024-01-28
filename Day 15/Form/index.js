function data()
{
let rows="";
let firstname=document.getElementById("first-name").value;
let lastname=document.getElementById("last-name").value;
let address=document.getElementById("address").value;
let pincode=document.getElementById("pincode").value;
let gender=document.getElementById("gender").value;
let food=document.getElementById("food").value;
let state=document.getElementById("state").value;
let country=document.getElementById("country").value;
 rows+="<tr><td>"+firstname+"</td><td>"+lastname+"</td><td>"+address+"</td><td>"+pincode+"</td><td>"+gender+"</td><td>"+food+"</td><td>"+state+"</td><td>"+country+"</td></tr>";
 $(rows).appendTo("#list tbody");
  return false;
}