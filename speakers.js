/* 🔥 HAMBURGER */
function toggleMenu(){
  let nav = document.getElementById("navLinks");

  if(nav){
    nav.classList.toggle("active");
  }else{
    console.log("navLinks NOT FOUND ❌");
  }
}

/* 🔥 DROPDOWN FIX */
function toggleRow(id){

    let all = document.querySelectorAll("tr.hidden");

    // সব close
    all.forEach(el=>{
        if(el.id !== id){
            el.style.display = "none";
        }
    });

    let row = document.getElementById(id);

    if(row.style.display === "table-row"){
        row.style.display = "none";
    }else{
        row.style.display = "table-row";
    }
}

/* 🔥 INIT HIDE */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("tr.hidden").forEach(el=>{
        el.style.display = "none";
    });
});
/* 🔥 AUTO RANK */
document.addEventListener("DOMContentLoaded", function () {

    // hide all dropdown rows
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

    for (let i = 1; i < allRows.length; i++) {

        let row = allRows[i];

        if (!row.classList.contains("hidden")) {

            let detailRow = allRows[i + 1];
            let avgEl = row.querySelector(".avg");

            if (avgEl && detailRow) {
                rows.push({
                    main: row,
                    detail: detailRow,
                    avg: parseFloat(avgEl.innerText)
                });
                i++;
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
        item.detail.classList.add("hidden");

        table.appendChild(item.main);
        table.appendChild(item.detail);
    });
}