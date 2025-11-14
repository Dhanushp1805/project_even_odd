// write a function Even Odd Number

function evenOdd() {
  let number = document.getElementById("no").value;

  if (number == "") {
    let result = document.getElementById("result");
    result.innerHTML = "Please provide number";
    result.style.color = "red";
    return false;
  } else {
    if (number % 2 == 0) {
      document.getElementById("result").innerText = number + " is even number";
    } else {
      document.getElementById("result").innerText = number + " is odd number";
    }
  }
}


