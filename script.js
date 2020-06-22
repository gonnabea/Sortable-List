const names = document.querySelectorAll("#names");
const cards = document.querySelectorAll("#cards");
const cardContainer = document.querySelectorAll("#cardContainer");
const checkBtn = document.getElementById("checkBtn");
const cardNumber = document.querySelectorAll("#cardNumber");

console.log(cards)
console.log(cardContainer)

let dragged;
let parent;
let nameList = ["Mark Zuckerberg", "Larry Page", "Bernard Anault", "Bill Gates", "Amancio Ortega",
"Larry Ellison", "Carlos Slim Helu", "Michale Bloomberg", "Jeff Bazos", "Warren Buffet"];
let filtered = [];
let randomNames = [];

const answer = ["Jeff Bazos", "Bill Gates", "Warren Buffet", "Bernard Anault", "Carlos Slim Helu", "Amancio Ortega", "Larry Ellison",
"Mark Zuckerberg", "Michale Bloomberg", "Larry Page"];

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
    for(let i=0 ; i < nameList.length ; i++){
        if(cards[i].innerText === answer[i]){
            cards[i].style.color = "#5564ED";
        }else{
            cards[i].style.color = "#FF0000";
        }
        cardContainer[i].addEventListener("drop", checkAnswer);
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
        cardNumber[i].addEventListener("dragover", (e) => {
            e.preventDefault();
            e.stopPropagation();
        })
        cardNumber[i].addEventListener("drop", (e) => {
            e.preventDefault();
            e.stopPropagation()
        }) // 넘버 영역에 드롭되는 버그 방지
    }
    checkBtn.addEventListener("click", checkAnswer);
}

init();