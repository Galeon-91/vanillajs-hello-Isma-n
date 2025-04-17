import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  generateExcuse();
};

window.generateExcuse = function () {
  let who = [
    "The dog", "My grandma", "The mailman", "My bird", "A raccoon",
    "An alien", "The neighbor", "My little sister", "My robot vacuum",
    "A time traveler", "A hacker", "The janitor", "My goldfish", "A squirrel",
    "The principal", "My clone", "The AI assistant", "The delivery guy",
    "My evil twin", "A ghost", "The babysitter", "My therapist"
  ];

  let action = [
    "ate", "peed on", "deleted", "destroyed", "hacked",
    "erased", "tore apart", "chewed", "burned", "hid",
    "ran over", "stole", "buried", "glitched", "melted",
    "lost", "cooked", "shredded", "sneezed on", "threw away"
  ];

  let what = [
    "my homework", "my phone", "the report", "my presentation",
    "the computer", "my backpack", "the USB stick", "my notes",
    "the script", "the charger", "my sketchbook", "the final draft",
    "the form", "the PDF", "my headphones", "the textbook",
    "my essay", "the camera", "my slides", "the prototype"
  ];

  let when = [
    "before class", "during my lunch", "while I was praying",
    "when I was asleep", "during recess", "on the way here",
    "when the power went out", "while I was meditating",
    "right before the deadline", "while I was cleaning",
    "when I stepped outside", "during my yoga session",
    "while I was on a call", "in the shower", "before dinner",
    "while watching a movie", "during my nap", "as I was writing",
    "in the elevator", "during my commute"
  ];

  const random = arr => arr[Math.floor(Math.random() * arr.length)];

  const excuse = `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;

  document.querySelector("#excuse").innerHTML = excuse;
};

