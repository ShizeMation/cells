const world = new World(100, 100);

const pixelSize = 4;

const ruleTable = document.getElementById("rule-table");

let ruleBtnsHTML = "";
for (let i = 0; i < 512; i++) {
    let c = i.toString(2).padStart(9, '0');
    c = c.slice(0,3) + '<br>' + c.slice(3,6) + '<br>' + c.slice(6,9);
    ruleBtnsHTML += `<div class="rule-btn zero" data-idx="${i}"><div class="tooltip">${c}</div></div>`;
}
ruleTable.innerHTML = ruleBtnsHTML;

ruleTable.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("rule-btn")) {
        let idx = Number(e.target.getAttribute("data-idx"));
        world.flipRule(idx);
        updateRuleTable();
    }
});

function updateRuleTable() {
    for (let i = 0; i < 512; i++) {
        let btn = ruleTable.children[i];
        if (world.rule[i] && !btn.classList.contains("one")) {
            btn.className = "rule-btn one";
        }
        else if (!world.rule[i] && !btn.classList.contains("zero")) {
            btn.className = "rule-btn zero";
        }
    }
}
