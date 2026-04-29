console.log("JS Connected ✅");

/* 🔥 HAMBURGER */
function toggleMenu(){
  let nav = document.getElementById("navLinks");

  if(nav){
    nav.classList.toggle("active");
  }else{
    console.log("navLinks NOT FOUND ❌");
  }
}

/* 🔥 DROPDOWN */
function toggleDrop(id){
  let target = document.getElementById(id);

  if(!target){
    console.log("Dropdown NOT FOUND ❌");
    return;
  }

  let all = document.querySelectorAll(".drop");

  all.forEach(el=>{
    if(el !== target){
      el.style.display = "none";
    }
  });

  if(target.style.display === "block"){
    target.style.display = "none";
  }else{
    target.style.display = "block";
  }
}