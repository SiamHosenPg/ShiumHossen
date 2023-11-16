//=================
var MoveBlock = document.querySelector(".CursorMouse");
var MoveDot = document.querySelector(".curserDot");
window.addEventListener("mousemove" , function(e){
    const Left = e.clientX;
    const top = e.clientY;
    MoveBlock.style.left=`${Left}px`;
    MoveBlock.style.top=`${top}px`;
    MoveDot.style.left=`${Left}px`;
    MoveDot.style.top=`${top}px`;
});
// Cursure system =============

