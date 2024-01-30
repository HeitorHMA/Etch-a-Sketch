let isPressed = false;
let sketchContainer = document.getElementById("sketch-container")
sketchContainer.addEventListener('mouseover',(e)=>{e.target.style.backgroundColor = 'red'});
for(let i = 0 ; i <12936; i++){
 sketchContainer.appendChild(document.createElement("div"));}
 div.id = 'pixl';
 /*sketchContainer.addEventListener('mousedown',()=>{isPressed = true})
sketchContainer.addEventListener('mouseup',()=>{isPressed = false})
sketchContainer.addEventListener('mousemove',(e)=>{isPressed ? e.target.style.backgroundColor = 'red' : e.target.style.backgroundColor = 'white'});*/