import NodeElem from "./modules/NodeElem.mjs";

let count = 0;

const board = document.getElementById("board");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const arr = [];

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("undo").addEventListener("click", undo);


board.addEventListener("mousedown", e => {

    function mouseUp(evnt){
        board.removeEventListener("mousemove", handleMousemovement);
        board.removeEventListener("mouseup", mouseUp);
        link();
    }

    board.addEventListener("mouseup", mouseUp);
    
    if (e.target !== board) return;

    let initX = e.clientX;
    let initY = e.clientY;

    function handleMousemovement(event){
        let moveX = event.clientX;
        let moveY = event.clientY;
        
        elem.setSize(moveX - initX, moveY - initY);
    }

    board.addEventListener("mousemove", handleMousemovement);

    let elem = new NodeElem(initX, initY);
    arr.push(elem);
})

function clear(){
    const array = Array.from(board.childNodes);
    array.forEach(value => {
        board.removeChild(value);
    })
    arr.pop()
    link();
}

function undo(){
    board.removeChild(board.lastChild);
    arr.pop()
    link();
}

function link(){
    ctx.clearRect(0,0,canvas.height, canvas.width)

    let h = canvas.height / canvas.offsetHeight;
    let w = canvas.width / canvas.offsetWidth;

    ctx.lineWidth = 15;

    ctx.beginPath();
    ctx.moveTo((arr[0].x * w)+ arr[0].div.offsetWidth/2, (arr[0].y * h) + arr[0].div.offsetHeight/2);
    for(let i = 1; i<arr.length; i++){
        ctx.lineTo((arr[i].x * w) + arr[i].div.offsetWidth/2, (arr[i].y * h) + arr[i].div.offsetHeight/2);
    }
    ctx.stroke();
}