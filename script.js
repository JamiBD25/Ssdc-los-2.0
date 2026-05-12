/* 🔥 hamburger menu */
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

/* 🔥 dropdown */
function toggleDrop(id){
let all = document.querySelectorAll(".drop");

all.forEach(el=>{
  if(el.id !== id){
    el.style.display = "none";
  }
});

let target = document.getElementById(id);

if(target.style.display === "block"){
  target.style.display = "none";
}else{
  target.style.display = "block";
}
}

/* 🔥 table expand */
function toggleRow(id){
document.getElementById(id).classList.toggle("hidden");
}