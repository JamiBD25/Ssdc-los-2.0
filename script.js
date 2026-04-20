function toggleDrop(id){
let el=document.getElementById(id);
el.style.display=(el.style.display==="block")?"none":"block";
}

function toggleRow(id){
document.getElementById(id).classList.toggle("hidden");
}
/* 🔥 hamburger menu */
function toggleMenu(){
document.querySelector(".nav-links").classList.toggle("active");
}

/* 🔥 dropdown */
function toggleDrop(id){
let el=document.getElementById(id);
el.style.display = (el.style.display==="block") ? "none" : "block";
}

/* 🔥 table expand */
function toggleRow(id){
document.getElementById(id).classList.toggle("hidden");
}