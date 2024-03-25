let name1 = document.getElementById("myName");
let button = document.getElementById("btn");
let choose1 = document.getElementById("listOne"),
  choose2 = document.getElementById("listTwo"),
  choose3 = document.getElementById("Three");
let demo = document.getElementById("demo");
let test = document.getElementById("test");
let test1 = document.getElementById("test1");
let p = document.querySelector("p");

button.addEventListener("click", () => {
  myList();
});

function myList() {
  name1.textContent = "Marc ";
  choose1.textContent = "Rugby";
  choose2.textContent = "Jeux Vidéos";
  choose3.textContent = "Randonnée";

  demo.style.visibility = "visible";
  p.textContent = "Pratiques et amuse toi en JS ";
}
