var btnstart = document.getElementById("start");
var btnstop = document.getElementById("stop");
var card1 = document.getElementById("btn1");
var card2 = document.getElementById("btn2");
var card3 = document.getElementById("btn3");
var quiz = document.getElementById("equation");
var answer,
  scores = 0,
  times = 0;
/* This function is used for start btn.*/
function start() {
  btnstart.setAttribute("class", "startbtn inactivestart");
  btnstart.disabled = true;
  btnstop.setAttribute("class", "stopbtn activestop");
  btnstop.disabled = false;
  card1.setAttribute("class", "btn1 activebtn");
  card1.disabled = false;
  card2.setAttribute("class", "btn1 activebtn");
  card2.disabled = false;
  card3.setAttribute("class", "btn1 activebtn");
  card3.disabled = false;
  generateEquation();
  placingNum();
}
/* This function is used for generate random numbers for btn1,btn2.*/
function generateEquation() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
  answer = num1 + num2;
  quiz.innerText = num1 + "+" + num2;
}
/*This function is used for placing numbers of card.*/
function placingNum() {
  num3 = Math.floor(Math.random() * 100);
  num4 = Math.floor(Math.random() * 100);
  var place = Math.floor(Math.random() * 3 + 1);
  /*console.log(place);*/
  switch (place) {
    case 1: {
      card1.innerText = answer;
      card2.innerText = num3;
      card3.innerText = num4;
      break;
    }

    case 2: {
      card1.innerText = num3;
      card2.innerText = answer;
      card3.innerText = num4;
      break;
    }

    case 3: {
      card1.innerText = num3;
      card2.innerText = num4;
      card3.innerText = answer;
      break;
    }
  }
}
/* This function is used for checking the answer. */
function checkAnswer(obj) {
  times++;
  var userChoice = obj.innerText;
  /*console.log(userChoice);*/
  if (userChoice == answer) {
    scores += 10;
  } else {
    scores -= 10;
  }
  generateEquation();
  placingNum();
  document.getElementById("score").innerText = "Score : " + scores;
  document.getElementById("time").innerText = "Time : " + times;
}

/* This function is used for stop btn. */
function stop() {
  btnstop.setAttribute("class", "stopbtn inactivestop");
  btnstop.disabled = true;
  btnstart.setAttribute("class", "startbtn activestart");
  btnstart.disabled = false;
  card1.innerText = "";
  card2.innerText = "";
  card1.setAttribute("class", "btn1 inactivebtn");
  card1.disabled = true;
  card2.setAttribute("class", "btn2 inactivebtn");
  card2.disabled = true;
  card3.setAttribute("class", "btn2 inactivebtn");
  card3.disabled = true;
  quiz.innerText ="";
  document.getElementById("list").innerHTML +=
    "Your scores is : " + scores + "<br/>";
}
