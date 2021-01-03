const canvas = document.getElementById("jsCanvas");
canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");


let painting = false;
let filling = false;


function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    ctx.strokeStyle = event.target.style.backgroundColor;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(!filling){
        filling = true;
        mode.innerText = "Paint";
    } else {
        filling = false;
        mode.innerText = "FILL";   
    }
}

//캔버스 위에서
if(canvas){
    //마우스를 올려다놓을때
    canvas.addEventListener("mousemove", onMouseMove);
    //마우스를 클릭해서 선을 그릴때
    canvas.addEventListener("mousedown", startPainting);
    //마우스 클릭을 멈췄을때
    canvas.addEventListener("mouseup", stopPainting);
    //마우스가 캔버스 밖으로 나갔을때
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => {
    color.addEventListener("click", handleColorClick);
});

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}