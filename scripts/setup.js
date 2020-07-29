const world = new World(100, 100);

const ruleTable = document.getElementById("rule-table");

let ruleBtnsHTML = "";
for (let i = 0; i < 512; i++) {
    ruleBtnsHTML += `<div class="rule-btn zero" data-idx="${i}">0</div>`;
}
ruleTable.innerHTML = ruleBtnsHTML;

ruleTable.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("rule-btn")) {
        let idx = Number(e.target.getAttribute("data-idx"));
        if (e.target.classList.contains("one")) {
            e.target.className = "rule-btn zero";
            e.target.innerHTML = "0";
            world.rule[idx] = false;
        }
        else if (e.target.classList.contains("zero")) {
            e.target.className = "rule-btn one";
            e.target.innerHTML = "1";
            world.rule[idx] = true;
        }
    }
});
