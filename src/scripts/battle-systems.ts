// sistema de combate

const enemy = document.querySelectorAll<HTMLElement>('.enemy');
const enemyEmptyHpBar = document.querySelectorAll<HTMLElement>('.enemy__red__hp');
const enemyHpBar = document.querySelectorAll<HTMLElement>('#enemy-hp');
const enemyHp = document.querySelectorAll<HTMLElement>('#enemy-hp-points');

const ally = document.querySelectorAll<HTMLElement>('.ally');
const allyEmptyHpBar = document.querySelectorAll<HTMLElement>('.ally__red__hp');
const allyHpBar = document.querySelectorAll<HTMLElement>('#ally-hp');
const allyHp = document.querySelectorAll<HTMLElement>('#ally-hp-points');

const playerHp = document.querySelectorAll<HTMLElement>('.character__hp__points');
const playerHealthBar = document.querySelectorAll<HTMLElement>('.character__green__hp')
const playerMp = document.querySelectorAll<HTMLElement>('.character__mana__points');
const manaBar = document.querySelectorAll<HTMLElement>('.character__mana__value');

const characterUI = document.getElementById('main-character-bars-container') as HTMLElement;
const characterIMG = document.getElementById('character-image') as HTMLElement;
const characterNAME = document.getElementById('character-name') as HTMLElement;
const characterGif = document.getElementById('main-character-gif') as HTMLElement;

// definição de status

type player = {
    name: string;
    health: number;
    mana: number;
    damage: number;
}

type ally = {
    name: string;
    health: number;
    energy: number;
    damage: number;
}

type enemy = {
    name: string;
    health: number;
    damage: number;
}

const players: player[] = [
    {
        name: "Player One",
        health: 200,
        mana: 30,
        damage: 30,
    },
]

const allys: ally[] = [
    {
        name: "Ally Monster",
        health: 90,
        energy: 30,
        damage: 30,
    },
    {
        name: "Ally Monster",
        health: 80,
        energy: 30,
        damage: 30,
    },
    {
        name: "Ally Monster",
        health: 70,
        energy: 30,
        damage: 30,
    },
]

const enemys: enemy[] = [
    {
        name: "Minion",
        health: 80,
        damage: 50,
    },
]

function setPlayerHp(player: player, playerHp: HTMLElement) {
    playerHp.textContent = player.health.toString();
}

setPlayerHp(players[0], playerHp[0]);

function setPlayerMp(player: player, playerMp: HTMLElement) {
    playerMp.textContent = player.mana.toString();
}

setPlayerMp(players[0], playerMp[0]);

function setAllyHp(ally: ally, allyHp: HTMLElement) {
    allyHp.textContent = ally.health.toString();
}

setEnemyHp(allys[0], allyHp[0]);
setEnemyHp(allys[1], allyHp[1]);
setEnemyHp(allys[2], allyHp[2]);

function setEnemyHp(enemy: enemy, EnemyHp: HTMLElement) {
    EnemyHp.textContent = enemy.health.toString();
}

setEnemyHp(enemys[0], enemyHp[0]);
setEnemyHp(enemys[0], enemyHp[1]);
setEnemyHp(enemys[0], enemyHp[2]);

// sistema de vida

function updatePlayerHPBar() {
    const maxHP = 200; 
    const healthPercentage = (players[0].health / maxHP) * 100;
    playerHealthBar[0].style.width = `${healthPercentage}%`;
}

function updateAllyHPBar() {
    const firstAllyMaxHP = 90;
    const secondAllyMaxHp = 80;
    const thirdAllyMaxHp = 70;

    const healthPercentageOne = (allys[0].health / firstAllyMaxHP) * 100;
    allyHpBar[0].style.width = `${healthPercentageOne}%`;

    const healthPercentageTwo = (allys[1].health / secondAllyMaxHp) * 100;
    allyHpBar[1].style.width = `${healthPercentageTwo}%`;

    const healthPercentageThree = (allys[2].health / thirdAllyMaxHp) * 100;
    allyHpBar[2].style.width = `${healthPercentageThree}%`;
}

function updateEnemyHPBar() {
    const maxHP = 100
    const healthPercentageOne = (enemys[0].health / maxHP) * 100;
    enemyHpBar[0].style.width = `${healthPercentageOne}%`;

    const healthPercentageTwo = (enemys[0].health / maxHP) * 100;
    enemyHpBar[1].style.width = `${healthPercentageTwo}%`;

    const healthPercentageThree = (enemys[0].health / maxHP) * 100;
    enemyHpBar[2].style.width = `${healthPercentageThree}%`;
}



// sistema de dano

function reducePlayerHP() {
    players[0].health -= 10

    setPlayerHp(players[0], playerHp[0]);
    updatePlayerHPBar();
}

function reduceEnemyHP() {
    enemys[0].health -= 10

    setEnemyHp(enemys[0], enemyHp[0]);
    setEnemyHp(enemys[0], enemyHp[1]);
    setEnemyHp(enemys[0], enemyHp[2]);
    updateEnemyHPBar();
}

function reduceFirstAllyHP() {
    allys[0].health -= 10

    setAllyHp(allys[0], allyHp[0]);
    updateAllyHPBar();
}

function reduceSecondAllyHP() {
    allys[1].health -= 10

    setAllyHp(allys[1], allyHp[1]);
    updateAllyHPBar();
}

function reduceThirdAllyHP() {
    allys[2].health -= 10

    setAllyHp(allys[2], allyHp[2]);
    updateAllyHPBar();
}

// sistema de morte 

function verifyFirstAllyHP() {
    if (allyHp.item(0).textContent <= "0") {
        ally.item(0).style.display = "none"
        allyHp.item(0).style.display = "none"
    }
}

function verifySecondAllyHP() {
    if (allyHp.item(1).textContent <= "0") {
        ally.item(1).style.display = "none"
        allyHp.item(1).style.display = "none"
    }
}

function verifyThirdAllyHP() {
    if (allyHp.item(2).textContent <= "0") {
        ally.item(2).style.display = "none"
        allyHp.item(2).style.display = "none"
    }  
}

// sistema de ataque aleatorio dos inimigos 

const firstEnemy = enemy.item(0);
const secondEnemy = enemy.item(1);
const thirdEnemy = enemy.item(2);

function firstEnemyMonsterAttack() {
    let randomAttackTarget = Math.floor(Math.random() * allys.length);
    console.log (randomAttackTarget)

    if (randomAttackTarget === 0 ) {
        setTimeout(() => {
            firstEnemy.style.bottom = "0"
            firstEnemy.style.right = "70rem";
            
    
            setTimeout(() => {
                reduceFirstAllyHP()
                verifyFirstAllyHP()
                firstEnemy.style.bottom = "0";
                firstEnemy.style.right = "32rem";
            }, 2000);
    
        }, 500);
    }

    if (randomAttackTarget === 1 ) {
        setTimeout(() => {
            firstEnemy.style.bottom = "40%"
            firstEnemy.style.right = "85rem";
            
    
            setTimeout(() => {
                reduceSecondAllyHP()
                verifySecondAllyHP()
                firstEnemy.style.bottom = "0";
                firstEnemy.style.right = "32rem";
            }, 2000);
    
        }, 500);
    }

    if (randomAttackTarget === 2 ) {
        setTimeout(() => {
            firstEnemy.style.bottom = "0"
            firstEnemy.style.right = "100rem";
    
            setTimeout(() => {
                reduceThirdAllyHP()
                verifyThirdAllyHP()
                firstEnemy.style.bottom = "0";
                firstEnemy.style.right = "32rem";
            }, 2000);
    
        }, 500);
    
    }

}

function secondEnemyMonsterAttack() {
    let randomAttackTarget = Math.floor(Math.random() * allys.length);
    console.log (randomAttackTarget)

    if (randomAttackTarget === 0 ) {
        setTimeout(() => {
            secondEnemy.style.bottom = "0"
            secondEnemy.style.right = "70rem";
            
    
            setTimeout(() => {
                reduceFirstAllyHP()
                verifyFirstAllyHP()
                secondEnemy.style.bottom = "40%"
                secondEnemy.style.right = "16rem";
            }, 2000);
    
       }, 4000);
    }

    if (randomAttackTarget === 1 ) {
        setTimeout(() => {
            secondEnemy.style.bottom = "40%"
            secondEnemy.style.right = "85rem";
            
            setTimeout(() => {
                reduceSecondAllyHP()
                verifySecondAllyHP()
                secondEnemy.style.bottom = "40%";
                secondEnemy.style.right = "16rem";
            }, 2000);
    
       }, 4000);
    }
    
    if (randomAttackTarget === 2 ) {
        setTimeout(() => {
            secondEnemy.style.bottom = "0"
            secondEnemy.style.right = "100rem";
   
        
            setTimeout(() => {
                reduceThirdAllyHP()
                verifyThirdAllyHP()
    
                secondEnemy.style.bottom = "40%"
                secondEnemy.style.right = "16rem";
            }, 2000);
        
        }, 4000);
    }
}

function thirdEnemyMonsterAttack() {
    let randomAttackTarget = Math.floor(Math.random() * allys.length);
    console.log (randomAttackTarget)

    if (randomAttackTarget === 0 ) {
        setTimeout(()=>{
            thirdEnemy.style.bottom = "0"
            thirdEnemy.style.right = "70rem";
            
        
            setTimeout(() => {
                reduceFirstAllyHP()
                verifyFirstAllyHP()
                thirdEnemy.style.bottom = "0";
                thirdEnemy.style.right = "0";
            }, 2000);
            
          }, 8000);
    }

    
    if (randomAttackTarget === 1 ) {
        setTimeout(()=>{
            thirdEnemy.style.bottom = "40%"
            thirdEnemy.style.right = "85rem";
        
            setTimeout(() => {
                reduceSecondAllyHP()
                verifySecondAllyHP()
                thirdEnemy.style.bottom = "0";
                thirdEnemy.style.right = "0";
            }, 2000);
            
          }, 8000);
    }

    
    if (randomAttackTarget === 2 ) {
        setTimeout(()=>{
            thirdEnemy.style.bottom = "0"
            thirdEnemy.style.right = "100rem";
           
            setTimeout(() => {
                reduceThirdAllyHP()
                verifyThirdAllyHP()
                thirdEnemy.style.bottom = "0";
                thirdEnemy.style.right = "0";
            }, 2000);
            
        }, 8000);
    }   
}

// sistema de mana

function updatePlayerManaBar(index: number) {
    const maxMana = 30; 
    const manaPercentage = (players[index].mana / maxMana) * 100;
    manaBar[index].style.width = `${manaPercentage}%`;
}

function reduceMana(index: number) {
    if (players[index].mana >= 10) {
        players[index].mana -= 10;

        setPlayerMp(players[index], playerMp[index]);
        updatePlayerManaBar(index);

        
    } else {
        console.log("Mana insuficiente");
    }
}

function increaseMana(index: number) {
    if (players[index].mana <= 20) {
        players[index].mana = players[index].mana + 10;
    }
        setPlayerMp(players[index], playerMp[index]);
        updatePlayerManaBar(index);
}

const victoryScreen = document.getElementById('won') as HTMLElement;
const loseScreen = document.getElementById('lose') as HTMLElement;

// sistema de passagem de turnos

const nextTurnButton = document.getElementById('end-turn-button') as HTMLButtonElement;

if (nextTurnButton) {
    nextTurnButton.addEventListener('click', () => {

        enemyHp.forEach((e) => {
        
            if (e.textContent === "0") {
                enemy.forEach((e) =>{
                    e.style.width = "0"
                    victoryScreen.style.display = "block"
                });
        
                enemyEmptyHpBar.forEach((e)=>{
                    e.style.display = "none"
                });
            }

        });

        firstEnemyMonsterAttack() 
        secondEnemyMonsterAttack() 
        thirdEnemyMonsterAttack()
       
        // reduceEnemyHP()
        increaseMana(0)


        playerHp.forEach((e)=>{
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
