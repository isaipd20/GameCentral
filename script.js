let d = new Date();
alert("Today's date is " + d);

var button = document.getElementById("testbutton");
button.addEventListener("click", changeColor);

function changeColor() {
    document.getElementsByClassName("test").style.backgroundColor = "green";
  }