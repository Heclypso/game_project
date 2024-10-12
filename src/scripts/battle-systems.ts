// sistema de combate

const enemy = document.querySelectorAll<HTMLElement>('.enemy');
const emptyHpBar = document.querySelectorAll<HTMLElement>('.card__red__hp');
const hpBar = document.querySelectorAll<HTMLElement>('.card__green__hp');
const EnemyHp = document.querySelectorAll<HTMLElement>('.card__hp__points');

const characterHP = document.querySelectorAll<HTMLElement>('.character__hp__points');
const healthBar = document.querySelectorAll<HTMLElement>('.character__green__hp')
const characterMP = document.querySelectorAll<HTMLElement>('.character__mana__points');
const manaBar = document.querySelectorAll<HTMLElement>('.character__mana__value');

const characterUI = document.getElementById('main-character-bars-container') as HTMLElement;
const characterIMG = document.getElementById('character-image') as HTMLElement;
const characterNAME = document.getElementById('character-name') as HTMLElement;
const characterGif = document.getElementById('main-character-gif') as HTMLElement;

const tutorialUI = document.getElementById('main-tutorial-bars-container') as HTMLElement;
const tutorialIMG = document.getElementById('tutorial-image') as HTMLElement;
const tutorialNAME = document.getElementById('tutorial-name') as HTMLElement;


tutorialUI.style.display = "none";

enemy.forEach((e) =>{
    e.addEventListener('click', ()=>{
        EnemyHp.forEach((e) => {
            e.textContent = "0"
        })
        hpBar.forEach((e) => {
            e.style.width = '0%'; 
        })
    })
});

// definição de status

type ally = {
    name: string;
    health: number;
    mana: number;
    damage: number;
}

type enemy = {
    name: string;
    health: number;
    damage: number;
}

let allys: ally[] = [
    {
        name: "Main Character",
        health: 150,
        mana: 30,
        damage: 30,
    },
    {
        name: "tutorial",
        health: 100,
        mana: 20,
        damage: 20,
    },
]

const enemys: enemy[] = [
    {
        name: "Minion",
        health: 80,
        damage: 50,
    },
]

function setAllyHp(ally: ally, characterHP: HTMLElement) {
    characterHP.textContent = ally.health.toString();
}

setAllyHp(allys[0], characterHP[0]);
setAllyHp(allys[1], characterHP[1]);

function setAllyMp(ally: ally, characterMP: HTMLElement) {
    characterMP.textContent = ally.mana.toString();
}

setAllyMp(allys[0], characterMP[0]);
setAllyMp(allys[1], characterMP[1]);

function setEnemyHp(enemy: enemy, EnemyHp: HTMLElement) {
    EnemyHp.textContent = enemy.health.toString();
}

setEnemyHp(enemys[0], EnemyHp[0]);
setEnemyHp(enemys[0], EnemyHp[1]);
setEnemyHp(enemys[0], EnemyHp[2]);

// sistema de vida

function updateEnemyHPBar() {
    const maxHP = 100
    const healthPercentageOne = (enemys[0].health / maxHP) * 100;
    hpBar[0].style.width = `${healthPercentageOne}%`;

    const healthPercentageTwo = (enemys[0].health / maxHP) * 100;
    hpBar[1].style.width = `${healthPercentageTwo}%`;

    const healthPercentageThree = (enemys[0].health / maxHP) * 100;
    hpBar[2].style.width = `${healthPercentageThree}%`;
}

function updateAllyHPBar() {
    const maxHP = 150; 
    const healthPercentage = (allys[0].health / maxHP) * 100;
    healthBar[0].style.width = `${healthPercentage}%`;
}

// sistema de dano

function reduceEnemyHP() {
    enemys[0].health -= 10

    setEnemyHp(enemys[0], EnemyHp[0]);
    setEnemyHp(enemys[0], EnemyHp[1]);
    setEnemyHp(enemys[0], EnemyHp[2]);
    updateEnemyHPBar();
}

function reduceAllyHP() {
    allys[0].health -= 10

    setAllyHp(allys[0], characterHP[0]);
    updateAllyHPBar();
}

// sistema de ataque aleatorio dos inimigos 

const firstEnemy = enemy.item(0);
const secondEnemy = enemy.item(1);
const thirdEnemy = enemy.item(2);

function attacktutorial() {
    setTimeout(() => {
        firstEnemy.style.bottom = "25%"
        firstEnemy.style.right = "70rem";
        reduceAllyHP()

        setTimeout(() => {
            firstEnemy.style.bottom = "0";
            firstEnemy.style.right = "32rem";
        }, 2000);

    }, 500);

   setTimeout(() => {
        secondEnemy.style.bottom = "25%"
        secondEnemy.style.right = "70rem";
        reduceAllyHP()

        setTimeout(() => {
            secondEnemy.style.top = "0";
            secondEnemy.style.right = "16rem";
        }, 2000);

   }, 1000);

  setTimeout(()=>{
    thirdEnemy.style.bottom = "25%"
    thirdEnemy.style.right = "70rem";
    reduceAllyHP()

    setTimeout(() => {
        thirdEnemy.style.bottom = "0";
        thirdEnemy.style.right = "0";
    }, 2000);
    
  }, 1500);
}

function attackMainCharacter() {
    setTimeout(() => {
        firstEnemy.style.bottom = "25%"
        firstEnemy.style.right = "85rem";
        reduceAllyHP()

        setTimeout(() => {
            firstEnemy.style.bottom = "0";
            firstEnemy.style.right = "32rem";
        }, 2000);

    }, 500);

   setTimeout(() => {
        secondEnemy.style.bottom = "25%"
        secondEnemy.style.right = "85rem";
        reduceAllyHP()

        setTimeout(() => {
            secondEnemy.style.top = "0";
            secondEnemy.style.right = "16rem";
        }, 2000);

   }, 1000);

  setTimeout(()=>{
    thirdEnemy.style.bottom = "25%"
    thirdEnemy.style.right = "85rem";
    reduceAllyHP()

    setTimeout(() => {
        thirdEnemy.style.bottom = "0";
        thirdEnemy.style.right = "0";
    }, 2000);
    
  }, 1500);
}

// sistema de mana

function updateManaBar(index: number) {
    const maxMana = 30; 
    const manaPercentage = (allys[index].mana / maxMana) * 100;
    manaBar[index].style.width = `${manaPercentage}%`;
}

function reduceMana(index: number) {
    if (allys[index].mana >= 10) {
        allys[index].mana -= 10;

        setAllyMp(allys[index], characterMP[index]);
        updateManaBar(index);

        
    } else {
        console.log("Mana insuficiente");
    }
}

function increaseMana(index: number) {
    if (allys[index].mana <= 20) {
        allys[index].mana = allys[index].mana + 10;
    }
        setAllyMp(allys[index], characterMP[index]);
        updateManaBar(index);
}

const victoryScreen = document.getElementById('won') as HTMLElement;
const loseScreen = document.getElementById('lose') as HTMLElement;

// sistema de passagem de turnos

const nextTurnButton = document.getElementById('end-turn-button') as HTMLButtonElement;

if (nextTurnButton) {
    nextTurnButton.addEventListener('click', () => {

        EnemyHp.forEach((e) => {
        
            if (e.textContent === "0") {
                enemy.forEach((e) =>{
                    e.style.width = "0"
                    victoryScreen.style.display = "block"
                });
        
                emptyHpBar.forEach((e)=>{
                    e.style.display = "none"
                });
            }

        });

        let randomAttackTarget = Math.floor(Math.random() * 2);
        
        if (randomAttackTarget === 0 ) {
             attackMainCharacter() 
        } else {
            attacktutorial() 
        }
        
        reduceEnemyHP()
        increaseMana(0)

        characterHP.forEach((e)=>{
            if (e.textContent === "0") {
                loseScreen.style.display = "block"
            } 
        })


    });
}



// sistema de criar cartas na mão

const cardFinalDestination = document.getElementById('container-cards') as HTMLElement;
const drawCardButton = document.getElementById('draw-card-button') as HTMLElement;

drawCardButton.addEventListener('click', () => {

    if (cardFinalDestination.children.length < 3) {
        reduceMana(0);
       const newCard = document.createElement('div');

       newCard.classList.add('card_container'); 
       newCard.textContent = 'Nova Carta'; 

       cardFinalDestination.appendChild(newCard);
    } else {
        console.log("Limite de cartas atingido (3)")
    }

});
