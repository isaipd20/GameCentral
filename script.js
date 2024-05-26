let d = new Date();
alert("Today's date is " + d);

function changeColor() {
  const button = document.getElementById("myButton");
  button.style.backgroundColor = "red";
}

function changeC() {
  const button = document.getElementById("myButton");
  button.style.backgroundColor = "blue";
}

function changeC() {
  const button = document.getElementById("myButton");
  button.style.backgroundColor = "green";
}

function timer(){
  var sec = 30;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

function timer2(){
  var sec = 20;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 100);
}

function timer3(){
  var sec = 10;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 10);
}

function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}