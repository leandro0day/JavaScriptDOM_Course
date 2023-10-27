//EXAMINE THE DOCUMENT OBJECT //

/* console.log(document);
document.domain is deprecated // console.log(location.hostname);
document.all is deprecated //console.log(document.querySelectorAll("*"));

console.log(location.hostname);
console.log(document.URL);
console.log(document.title);
document.title = 123
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images); */

// GET ELEMENT BY ID//
/* console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";
console.log(headerTitle.innerText);
headerTitle.innerHTML = <h3>Hello</h3>;
header.style.borderBottom = 'solid 3px #000' */

//GET ELEMENT BY CLASSNAME //
/* let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.background = "yellow";

for(let i = 0; i < items.length; i++) {
 items[1].style.background = "#f4f4f4"
} */

//QUERYSELECTOR//
/* let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input");
input.value = "Hello Word";

let submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

let item = document.querySelector("list-group-item");
item.style.color = "red";

let lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "blue";

let secondItem = document.querySelector("list-group-item:nth-child(2)");
secondItem.style.color = "coral"; 

//QUERYSELECTORALL//
/* let titles = document.querySelectorAll(".title");
titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#cc";
} */

//TRAVERSING THE TDOM//
let itemList = document.querySelector("#items");
//ParentNode
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

//childNodes
console.log(itemList.childNodes);
console.log(itemList.childNodes[1]);
itemList.children[1].style.backgroundColor = "yellow";
 
//FristChild
console.log(itemList.firstChild);

//fristElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 3";

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4 ";

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

//Create Element

//Create a div
let newDiv = document.createElement("div");

//Add clase
newDiv.className = "hello";

//Add class
newDiv.id = "hello1";

//Add attr
newDiv.setAttribute("title", "Hello div");

//Create text node
let newDivText = document.createTextNode("HelloWord");

//Add text ti div
newDiv.appendChild(newDivText);

let container = document.querySelector(" .container");
let h1 = document.querySelector("header h1");

console.log(container);
newDiv.style.fontSize = "30px";*/

/* let button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);
function buttonClick(e) {
  console.log("Button clicked");
  document.getElementById("header-title").textContent = "Changed";
  document.querySelector("#main").computedStyleMap.backgroundColor = "#f4f4f4";
  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  let output = document.getElementById("output");
  output.innerHTML = "<h3>" + e.target.id + "</h3>";
  console.log(e.type);

  console.log(e.clientX);
  console.log(e.clientY);

  console.log(e.offsetX);
  console.log(e.offsetY);

  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
} */

let button = document.getElementById("button");
let box = document.getElementById("box");

//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mousedown", runEvent);
//button.addEventListener("mouseup", runEvent);

//box.addEventListener("mouseenter", runEvent);
//box.addEventListener("mouseleave", runEvent);

//box.addEventListener("mouseover", runEvent);
//box.addEventListener("mouseout", runEvent);

//box.addEventListener("mousemove", runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector("form");
let select = document.querySelector("select");
//itemInput.addEventListener("keydown", runEvent);
//itemInput.addEventListener("keyup", runEvent);
//itemInput.addEventListener("keypress", runEvent);
//itemInput.addEventListener("focus", runEvent);
//itemInput.addEventListener("blur", runEvent);
//itemInput.addEventListener("cut", runEvent);
//itemInput.addEventListener("paste", runEvent);
//select.addEventListener("change", runEvent);
//select.addEventListener("input", runEvent);
form.addEventListener("submit", runEvent);
function runEvent(e) {
    e.preventDefault();
  console.log("EVENT TYPE: " + e.type);
  //console.log(e.target.value);

  //document.getElementById("output").innerHTML ="<h3>" + e.target.value + "</h3>";

  //output.innerHTML =
  //"<h3>MouseX: " + e.offsetX + "</h3> <h3>MouseY: " + e.offsetY + "</h3>";
  // document.body.style.backgroundColor = "rgb(" + e.offsetX + " , " + e.offsetY + ", 40)";
}
