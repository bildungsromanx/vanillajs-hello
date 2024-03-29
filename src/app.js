/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const randomExcuse = document.getElementById("excuse");
  let initalExcuse = randomExcuse.innerHTML;
  const generateExcuse = () => {
    let who = ["Adela", "Brittney", "I", "My cat"];
    let action = [" fought", " destroyed", " ate", " wrestled"];
    let what = [" my snail", " a snake", " the entire population of Miami"];
    let when = [" today", " recently", " yesterday"];
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndex] + action[actionIndex] + what[whatIndex] + when[whenIndex]
    );
  };

  document.getElementById("button").onclick = () => {
    randomExcuse.innerHTML = generateExcuse();
  };

  // HTML button elements
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  const button3 = document.getElementById("button3");
  const button4 = document.getElementById("button4");

  // button1 click event listener to apply function
  button1.addEventListener("click", function() {
    randomExcuse.innerHTML = generateExcuse();
  });
  button2.addEventListener("click", function() {
    randomExcuse.innerHTML = generateExcuse();
  });
  button3.addEventListener("click", function() {
    randomExcuse.innerHTML = generateExcuse();
  });
  button4.addEventListener("click", function() {
    randomExcuse.innerHTML = generateExcuse();
  });

  const blinking = document.getElementById("blinking");

  function blink() {
    let h1 = document.querySelector("h1");
    if (h1.style.visibility == "hidden") {
      h1.style.visibility = "visible";
    } else {
      h1.style.visibility = "hidden";
    }
  }
  window.setInterval(blink, 800);
};
