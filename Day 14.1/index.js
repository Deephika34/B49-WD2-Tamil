function performCalculation(operation) {
  const num1 =Number (document.getElementById("num1").value);
  const num2 =Number (document.getElementById("num2").value);
  
  let result;
  switch (operation) {
    case "add":
  result =  num1 + num2;
  break;
  case "sub":
  result = num1 - num2;
  break;
  case "multiply":
  result = num1 * num2;
  break;
  case "divide":
    result = num1 / num2;
    break;
    default:
    result = "Invalid Operation";
  }
  document.getElementById("resultValue").textContent = result;
}