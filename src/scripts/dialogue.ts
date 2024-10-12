const monsterField = document.getElementById('monster-field') as HTMLElement;
const textContainer = document.getElementById('text-container') as HTMLElement;
const dialogueText = document.getElementById('text-container-p') as HTMLElement;
const dialogueOptionYes = document.getElementById('text-container-yes') as HTMLElement;
const dialogueOptionNo = document.getElementById('text-container-no') as HTMLElement;
const characterImage = document.getElementById('character-image') as HTMLElement;
const characterName = document.getElementById('character-name') as HTMLElement;
const tutorialImage = document.getElementById('tutorial-image') as HTMLElement;
const tutorialName = document.getElementById('tutorial-name') as HTMLElement;
const battleUi = document.getElementById('character-ui') as HTMLElement;
const closeContainerCardsButton = document.getElementById('container-cards-close-button') as HTMLElement;
const robotCatBanner = document.getElementById('robot-cat-banner') as HTMLElement;
const robotCatBannerDescription = document.getElementById('robot-cat-description') as HTMLElement;
const robotCatBannerBlackBackground = document.getElementById('robot-cat-black-background') as HTMLElement;

monsterField.style.display = "none";
textContainer.style.display = "block";
battleUi.style.display = "none";
closeContainerCardsButton.style.display = "none";
dialogueOptionYes.style.display = "none";
dialogueOptionNo.style.display = "none";
tutorialImage.style.display = "none";
tutorialName.style.display = "none";

// Inicio do diálogo

tutorialImage.style.display = "none";
tutorialName.style.display = "none";

dialogueText.textContent = "...?";

setTimeout(()=> {
    tutorialImage.style.display = "block";
    tutorialName.style.display = "block";

    characterImage.style.display = "none";
    characterName.style.display = "none";
}, 3500);

setTimeout(() => {
    dialogueText.textContent = "Hi, my friend, you are a mage... right? Can you help me open the path through the dungeon? You can keep the rewards";
    dialogueOptionYes.style.display = "block";
    dialogueOptionNo.style.display = "block";
}, 3500);

dialogueOptionYes.addEventListener('click', () => {
    robotCatBanner.style.display = "flex"
    monsterField.style.display = "flex";
    battleUi.style.display = "block";
    closeContainerCardsButton.style.display = "block";
    textContainer.style.display = "none";
})

dialogueOptionNo.addEventListener('click', ()=> {
    console.log("eu disse não");
    tutorialImage.style.display = "none";
    tutorialName.style.display = "none";
    characterImage.style.display = "block";
    characterName.style.display = "block";
    dialogueText.textContent = "I wouldn't be able to finish the dungeon alone";
    dialogueOptionNo.style.display = "none";
})

robotCatBanner.addEventListener('click', () => {
    robotCatBannerDescription.style.display = "flex"
    robotCatBannerBlackBackground.style.display = "block"

    robotCatBannerDescription.addEventListener('click', () => {
        robotCatBannerDescription.style.display = "none"
        robotCatBannerBlackBackground.style.display = "none"
        robotCatBanner.style.display = "none";
    });  
})