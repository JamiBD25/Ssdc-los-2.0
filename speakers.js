/* 🔥 HAMBURGER */
function toggleMenu(){
  let nav = document.getElementById("navLinks");

  if(nav){
    nav.classList.toggle("active");
  }else{
    console.log("navLinks NOT FOUND ❌");
  }
}

/* 🔥 TABLE ROW TOGGLE */
function toggleRow(id){
    let row = document.getElementById(id);
    row.classList.toggle("hidden");
}

/* 🔥 AUTO RANK */
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".hidden").forEach(el=>{
        el.style.display = "none";
    });

    autoRank();
});

function autoRank() {
    let table = document.querySelector("table");
    if (!table) return;

    let rows = [];
    let allRows = Array.from(table.querySelectorAll("tr"));

    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];

        if (!row.classList.contains("hidden") && !row.querySelector("th")) {

            let hiddenRow = allRows[i + 1];
            let avgElement = row.querySelector(".avg");

            if (avgElement) {
                rows.push({
                    main: row.cloneNode(true),
                    detail: hiddenRow.cloneNode(true),
                    avg: parseFloat(avgElement.innerText)
                });
            }
        }
    }

    rows.sort((a, b) => b.avg - a.avg);

    let header = table.querySelector("tr");
    table.innerHTML = "";
    table.appendChild(header);

    let rank = 1;

    rows.forEach(item => {
        item.main.cells[0].innerText = rank++;
        table.appendChild(item.main);
        table.appendChild(item.detail);
    });
}