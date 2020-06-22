const names = document.querySelectorAll("#names");
const cards = document.querySelectorAll("#cards");
const cardContainer = document.querySelectorAll("#cardContainer");
const checkBtn = document.getElementById("checkBtn");

console.log(cards)
console.log(cardContainer)

let dragged;
let parent;
let nameList = ["Mark Zuckerberg", "Larry Page", "Bernard Anault", "Bill Gates", "Amancio Ortega",
"Larry Ellison", "Carlos Slim Helu", "Michale Bloomberg", "Jeff Bazos", "Warren Buffet"];
let filtered = [];
let randomNames = [];

const answer = ["Jeff Bazos", "Bill Gates", "Warren Buffett", "Bernard Arnault", "Carlos Slim Helu", "Amancio Ortega", "Larry Ellison",
"Mark Zuckerberg", "Michael Bloomberg", "Larry Page"];

function cardDrag(e){
    draggedText = e.target.innerText;
    dragged = e.target;
}

function cardDragOver(e){
    e.preventDefault();
}

function cardDrop(e){
    dragged.innerText = e.target.innerText;
    e.target.innerText = draggedText;
}

function checkAnswer(){
    for(let i=0 ; i < cards.length ; i++){
        const randomNum = Math.floor(Math.random()*10);
        cards[i].innerText = `${nameList[randomNum] + "➰"}`;
    }
}


function makeRandomOrder(){

do {
  let num = Math.floor(Math.random() * nameList.length);
  filtered.push(num);
  filtered = filtered.filter((item, index) => {
    return filtered.indexOf(item) === index
});
} while (filtered.length < nameList.length);

for(let i=0 ; i < nameList.length ; i++){
    cards[i].innerText = nameList[filtered[i]];
}
    
}

function init() {
    makeRandomOrder()
    for(let i=0; i < cards.length ; i++){
        cards[i].addEventListener("dragstart", cardDrag);
        cardContainer[i].addEventListener("dragover", cardDragOver);
        cardContainer[i].addEventListener("drop", cardDrop);
    }
    checkBtn.addEventListener("click", checkAnswer);
}

init();