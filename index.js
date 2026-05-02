/* 🔥 HAMBURGER */
function toggleMenu(){
  let nav = document.getElementById("navLinks");

  if(nav){
    nav.classList.toggle("active");
  }else{
    console.log("navLinks NOT FOUND ❌");
  }
}
/* 🔥 SAFE DROPDOWN SYSTEM */

document.addEventListener("DOMContentLoaded", function () {

    // সব hide
    document.querySelectorAll(".drop").forEach(el=>{
        el.style.display = "none";
    });

    // click handler
    document.addEventListener("click", function(e){

        if(e.target.classList.contains("drop-btn")){

            let id = e.target.getAttribute("data-id");
            let target = document.getElementById(id);

            if(!target) return;

            // close others
            document.querySelectorAll(".drop").forEach(el=>{
                if(el.id !== id){
                    el.style.display = "none";
                }
            });

            // toggle current
            if(target.style.display === "block"){
                target.style.display = "none";
            }else{
                target.style.display = "block";
            }
        }
    });
});