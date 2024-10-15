// sistema de esconder as cartas da mão

const containerCards = document.getElementById('container-cards') as HTMLElement;
const closeButton = document.getElementById('container-cards-close-button') as HTMLElement;
const containerCardsIcon = document.getElementById('container-cards-icon') as HTMLElement;

closeButton.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(containerCards); 
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "none") {
        containerCardsIcon.style.rotate = "180deg";
        containerCards.style.display = "flex";
    } else {
        containerCardsIcon.style.rotate = "0deg";
        containerCards.style.display = "none";
    }
});

// sistema de fuga da batalha 

const leaveContainer = document.getElementById('leave-battle-menu') as HTMLElement;
const runButton = document.getElementById('run') as HTMLElement;
const confirmRunButton = document.getElementById('exit-battle') as HTMLElement;
const denyRunButton = document.getElementById('stay-in-battle') as HTMLElement;

runButton.addEventListener('click', () => {
    leaveContainer.style.display = "block";
});

denyRunButton.addEventListener('click', () => {
    leaveContainer.style.display = "none";
});

// sistema de abrir o menu de opções

const openOptionsButton = document.getElementById('open-options-button') as HTMLElement;
const closeOptionsButton = document.getElementById('close-options') as HTMLElement;
const optionsMenu = document.getElementById('options') as HTMLElement;

openOptionsButton.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(optionsMenu); 
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "none") {
        optionsMenu.style.display = "block";
    } 
});

closeOptionsButton.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(optionsMenu); 
    // sem o computedstyle o botao pode retornar uma string vazia 
    // fazendo com que seja necessario dois clicks para o botao funcionar
    if (computedStyle.display === "block") {
        optionsMenu.style.display = "none";
    } 
});

// sistema de draggin
const columns = document.querySelectorAll<HTMLElement>(".column"); 

document.addEventListener("dragstart", (e: DragEvent) => {
    const target = e.target as HTMLElement;
    target.classList.add("dragging");
});

document.addEventListener("dragend", (e: DragEvent) => {
    const target = e.target as HTMLElement; 
    target.classList.remove("dragging");
});

columns.forEach((item) => {
    item.addEventListener("dragover", (e: DragEvent) => {
        e.preventDefault(); 

        const dragging = document.querySelector<HTMLElement>(".dragging");
        const applyAfter = getNewPosition(item, e.clientY);

        if (dragging) {
            cardHolder.style.display = "block"
        } 

        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
            item.prepend(dragging);
        }
    });
});

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll("item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.top + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
    }

    return result
}

// sistema de receber drops 

const claimButton = document.getElementById('victory-screen-claim-button') as HTMLElement;

claimButton.addEventListener('click', () => {
    console.log("itens recebidos")
});
