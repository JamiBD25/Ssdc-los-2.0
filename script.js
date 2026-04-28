/* 🔥 hamburger menu */
function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

/* 🔥 dropdown */
function toggleDrop(id){
let el = document.getElementById(id);

if(el.style.display === "block"){
el.style.display = "none";
}else{
el.style.display = "block";
}
}

/* 🔥 table expand */
function toggleRow(id){
document.getElementById(id).classList.toggle("hidden");
}
/* 🔥 speaker auto rank */
document.addEventListener("DOMContentLoaded", function () {
    autoRank();
});

function autoRank() {
    let table = document.querySelector("table");

    // সব row collect (header বাদে + hidden বাদে মূল row)
    let rows = Array.from(table.querySelectorAll("tr"))
        .filter(row => !row.querySelector("th") && !row.classList.contains("hidden"));

    // শুধু main rows sort করা (Avg অনুযায়ী)
    rows.sort((a, b) => {
        let avgA = parseFloat(a.querySelector(".avg").innerText);
        let avgB = parseFloat(b.querySelector(".avg").innerText);
        return avgB - avgA; // high to low
    });

    // পুরানো rows remove (hidden সহ জোড়া রেখে)
    rows.forEach(row => {
        let next = row.nextElementSibling;
        if (next && next.classList.contains("hidden")) {
            table.appendChild(row);
            table.appendChild(next);
        } else {
            table.appendChild(row);
        }
    });

    // 🔥 Rank আবার সেট করা
    let rank = 1;
    let updatedRows = Array.from(table.querySelectorAll("tr"))
        .filter(row => !row.querySelector("th") && !row.classList.contains("hidden"));

    updatedRows.forEach(row => {
        row.cells[0].innerText = rank++;
    });
}
