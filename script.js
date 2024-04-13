let d = new Date();
alert("Today's date is " + d);

var button = document.getElementById("test");
button.addEventListener("click", changeColor);

function changeColor() {
    document.getElementsByClassName("test").style.backgroundColor = "blue";
  }