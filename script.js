const names = document.querySelectorAll("#names");
const cards = document.querySelectorAll("#cards");
const cardContainer = document.querySelectorAll("#cardContainer");

console.log(cards)
console.log(cardContainer)

let dragged;
let parent;

function cardDrag(e){
    draggedText = e.target.innerText;
    dragged = e.target;
    console.log(parent)
}

function cardDragOver(e){
    e.preventDefault();
}

function cardDrop(e){
    dragged.innerText = e.target.innerText;
    e.target.innerText = draggedText;
}

function changeWord(e){
    
}

function init() {
    for(let i=0; i < cards.length ; i++){
        cards[i].addEventListener("dragstart", cardDrag);
        cardContainer[i].addEventListener("dragover", cardDragOver);
        cardContainer[i].addEventListener("drop", cardDrop);
        cards[i].addEventListener("dragend", changeWord);
    }
}

init();