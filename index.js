/* 🔥 HAMBURGER */
function toggleMenu(){
  let nav = document.getElementById("navLinks");

  if(nav){
    nav.classList.toggle("active");
  }else{
    console.log("navLinks NOT FOUND ❌");
  }
}
