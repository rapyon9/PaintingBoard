const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

//캔버스 위에서
if(canvas){
    //마우스를 올려다놓을때
    canvas.addEventListener("mousemove", onMouseMove);
    //마우스를 클릭해서 선을 그릴때
    canvas.addEventListener("mousedown", onMouseDown);
    //마우스 클릭을 멈췄을때
    canvas.addEventListener("mouseup", onMouseUp);
    //마우스가 캔버스 밖으로 나갔을때
    canvas.addEventListener("mouseleave", stopPainting);
}