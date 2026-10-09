let boxFocused = undefined;
let colourArray = ['#ffffff', '#f7aef8', '#d649cf', '#8b1bbd', '#3e04bd'];
let currentYear = '2027'; // Ano padrão ao abrir a página
let currentData = {};

function changeTab(year) {
    currentYear = year;
    
    // Atualiza a classe ativa dos botões visualmente
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    let activeTab = document.getElementById('tab-' + year);
    if(activeTab) activeTab.classList.add('active');
    
    renderFlowchart();
}

function renderFlowchart() {
    currentData = curriculos[currentYear];
    boxFocused = undefined;

    const boxRows = document.getElementById("boxRows");
    boxRows.innerHTML = ""; 

    const svgContainer = document.getElementById("svgContainer");
    const defs = svgContainer.querySelector("defs").outerHTML;
    svgContainer.innerHTML = defs;
    svgContainer.style.pointerEvents = "none"; 

    let available = {};
    let periodos = new Set([]);
    
    for (const [key, value] of Object.entries(currentData)) {
        const periodo = (value.periodo - 1) || 0;
        periodos.add(periodo);
    }
    periodos = Array.from(periodos).sort((a, b) => a - b);

    for (const periodo of periodos) {
        boxRows.appendChild(document.createElement("hr"));

        const h2 = document.createElement("h2");
        h2.innerText = `${periodo + 1}º Período`;
        boxRows.appendChild(h2);

        let rowContainer = document.createElement("div");
        rowContainer.setAttribute("id", "row" + periodo + "container");
        rowContainer.setAttribute("class", "rowContainer");
        rowContainer.style.justifyContent = "center"; 
        boxRows.appendChild(rowContainer);
    }

    while(Object.keys(available).length < Object.keys(currentData).length) {
        let added = false; 
        for(let [key, value] of Object.entries(currentData)) {
            const rowNum = (value.periodo - 1) || 0;
            let possible = true;
            for(let req of value["requisito"]) {
                if(available[req] === undefined) {
                    possible = false;
                    break;
                }
            }
            if(available[key] === undefined && possible) {
                available[key] = rowNum;
                added = true;
                
                let box = document.createElement("div");
                box.setAttribute("id", key);
                box.setAttribute("class", "row" + rowNum + " modbox");
                box.setAttribute("style", "opacity: 1; z-index: 2;");

                let modName = document.createElement("span");
                let text = document.createTextNode(key);
                modName.appendChild(text);
                modName.classList.add("modTitle");
                
                box.appendChild(modName);

                document.getElementById("row" + rowNum + "container").appendChild(box);
                box.addEventListener("mouseover", boxHover);
                box.addEventListener("mouseleave", boxLeave);
                box.addEventListener("click", boxClick);
            }
        }
        if (!added) break; 
    }
    
    setTimeout(function() {
        svgContainer.style.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) + "px";
        drawArrows();
    }, 200);
}

function setup() {
    document.body.addEventListener("click", bgClick);
    renderFlowchart();
}

function drawArrows() {
    const svgContainer = document.getElementById("svgContainer");

    for(let [key, value] of Object.entries(currentData)) {
        let self = document.getElementById(key);
        if(!self) continue;

        if(value["requisito"].length) {
            for(let req of value["requisito"]) {
                let parent = document.getElementById(req);

                if(!parent) {
                    console.warn(`Seta ignorada: A matéria "${key}" pede "${req}", mas essa matéria não existe!`);
                    continue;
                }

                let clone = document.getElementById(req + key);

                if(!clone) {
                    clone = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    clone.setAttribute("style", "stroke: #3e04bd; stroke-width: 2; opacity: 0; transition: opacity 0.2s ease-in-out;");
                    clone.setAttribute("marker-end", "url(#arrow)");

                    clone.setAttribute("id", req + key);
                }

                let parentRect = parent.getBoundingClientRect();
                let selfRect = self.getBoundingClientRect();
                let svgRect = svgContainer.getBoundingClientRect();

                let x1 = parentRect.left + (parentRect.width / 2) - svgRect.left;
                let y1 = parentRect.bottom - svgRect.top;
                let x2 = selfRect.left + (selfRect.width / 2) - svgRect.left;
                let y2 = selfRect.top - svgRect.top;

                clone.setAttribute("x1", x1 + "px");
                clone.setAttribute("y1", y1 + "px");
                clone.setAttribute("x2", x2 + "px");
                clone.setAttribute("y2", y2 + "px");

                svgContainer.appendChild(clone);
            }
        }
    }
}

function boxHover(event) {
    if(!boxFocused) {
        highlight(event.target);
    }
}

function highlight(box) {
    while(!box.classList.contains("modbox")) {
        box = box.parentElement;
    }
    let id = box.id;

    box.style.border = "1px solid rgba(62, 4, 189, 1)";

    let arrows = document.getElementsByTagName("line");
    for(let a = 0; a < arrows.length; a++) {
        arrows[a].style.opacity = 0; // Garante que setas irrelevantes continuem invisíveis
    }
    
    for(let [key, value] of Object.entries(currentData)) {
        let el = document.getElementById(key);
        if(el) el.style.opacity = 0.2; 
    }
    
    highlightRecurseDown(id, 1);
    highlightRecurse(id, 1);
}

function highlightRecurseDown(id, depth, visited = new Set()) {
    if (visited.has(id)) return;
    visited.add(id);

    let el = document.getElementById(id);
    if(el) el.style.opacity = 1;
    
    for(let [key, value] of Object.entries(currentData)) {
        if(value["requisito"].includes(id)) {
            let line = document.getElementById(id + key);
            if(line) {
                line.style.opacity = 1;
                line.style.stroke = colourArray[colourArray.length - depth] || '#3e04bd';
                line.style.strokeWidth = 3;
            }
            
            let keyEl = document.getElementById(key);
            if(keyEl) keyEl.style.opacity = 1;
            
            highlightRecurseDown(key, depth + 1, visited);
        }
    }
}

function highlightRecurse(id, height, visited = new Set()) {
    if (visited.has(id)) return;
    visited.add(id);

    let el = document.getElementById(id);
    if(el) el.style.opacity = 1;
    
    if(!currentData[id] || !currentData[id]["requisito"]) return;

    for(let a = 0; a < currentData[id]["requisito"].length; a++) {
        let req = currentData[id]["requisito"][a];
        
        let line = document.getElementById(req + id);
        if(line) {
            line.style.opacity = 1;
            line.style.stroke = colourArray[height] || '#3e04bd';
            line.style.strokeWidth = 3;
        }
        highlightRecurse(req, height + 1, visited);
    }
}

function boxLeave() {
    if(boxFocused === undefined) {
        let boxes = document.getElementsByClassName("modbox");
        let arrows = document.getElementsByTagName("line");
        for(let a = 0; a < boxes.length; a++) {
            boxes[a].style.opacity = 1;
            boxes[a].style.border = "1px solid rgba(255,255,255,0)";
        }   
        for(let a = 0; a < arrows.length; a++) {
            arrows[a].style.opacity = 0; // Setas somem ao tirar o mouse
        }
    }
}

function bgClick(event) {
    let source = event.target;
    if(source.tagName.toLowerCase() === "html" || source.tagName.toLowerCase() === "body" || source.id === "main" || source.id === "boxRows") {
        boxFocused = undefined;
        boxLeave();
    }
}

function boxClick(event) {
    boxFocused = undefined;
    boxLeave();
    let box = event.target;
    while(!box.classList.contains("modbox")) {
        box = box.parentElement;
    }
    boxFocused = box;
    highlight(box);
}

document.addEventListener('DOMContentLoaded', setup);
window.addEventListener('resize', () => {
    const svgContainer = document.getElementById("svgContainer");
    svgContainer.style.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) + "px";
    
    const defs = svgContainer.querySelector("defs").outerHTML;
    svgContainer.innerHTML = defs;
    drawArrows();
    if (boxFocused) highlight(boxFocused);
});
