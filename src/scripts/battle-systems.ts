const enemy = document.querySelectorAll<HTMLElement>('.enemy');
const enemyEmptyHpBar = document.querySelectorAll<HTMLElement>('.enemy__red__hp');
const enemyHpBar = document.querySelectorAll<HTMLElement>('#enemy-hp');
const enemyHp = document.querySelectorAll<HTMLElement>('#enemy-hp-points');

const ally = document.querySelectorAll<HTMLElement>('.ally');
const allyEmptyHpBar = document.querySelectorAll<HTMLElement>('.ally__red__hp');
const allyHpBar = document.querySelectorAll<HTMLElement>('#ally-hp');
const allyHp = document.querySelectorAll<HTMLElement>('#ally-hp-points');
const allyField = document.getElementById('ally-field') as HTMLElement;

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
    id: number;
    health: number;
    energy: number;
    damage: number;
    alive: boolean;
}

type enemy = {
    name: string;
    id: number;
    health: number;
    energy: number;
    damage: number;
    alive: boolean;
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
        name: "Ally Monster One",
        id: 1,
        health: 90,
        energy: 30,
        damage: 30,
        alive: true,
    },
    {
        name: "Ally Monster Two",
        id: 2,
        health: 80,
        energy: 30,
        damage: 30,
        alive: true,
    },
    {
        name: "Ally Monster Three",
        id: 3,
        health: 70,
        energy: 30,
        damage: 30,
        alive: true,
    },
]

const enemys: enemy[] = [
    {
        name: "Minion",
        id: 1,
        health: 80,
        energy: 30,
        damage: 50,
        alive: true,
    },
    {
        name: "Minion",
        id: 2,
        health: 80,
        energy: 30,
        damage: 50,
        alive: true,
    },
    {
        name: "Minion",
        id: 3,
        health: 80,
        energy: 30,
        damage: 50,
        alive: true,
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

if (ally[0] && allyHp[0]) {
    setAllyHp(allys[0], allyHp[0]);
}

if (ally[1] && allyHp[1]) {
    setAllyHp(allys[1], allyHp[1]);
}

if (ally[2] && allyHp[2]) {
    setAllyHp(allys[2], allyHp[2]);
}

function setEnemyHp(enemy: enemy, EnemyHp: HTMLElement) {
    EnemyHp.textContent = enemy.health.toString();
}

setEnemyHp(enemys[0], enemyHp[0]);
setEnemyHp(enemys[1], enemyHp[1]);
setEnemyHp(enemys[2], enemyHp[2]);

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

    if (allyHpBar[0]) {
        const healthPercentageOne = (allys[0].health / firstAllyMaxHP) * 100;
        allyHpBar[0].style.width = `${healthPercentageOne}%`;
    }

    if (allyHpBar[1]) {
        const healthPercentageTwo = (allys[1].health / secondAllyMaxHp) * 100;
        allyHpBar[1].style.width = `${healthPercentageTwo}%`;
    }

    if (allyHpBar[2]) {
        const healthPercentageThree = (allys[2].health / thirdAllyMaxHp) * 100;
        allyHpBar[2].style.width = `${healthPercentageThree}%`;
    }

    // condição de derrota

    const allyHpBars = allyHpBar.length

    switch (allyHpBars) {

        case 1: {
            if (allys[0].health <= 0) {
                gameOver()
            }
        }

        case 2: {
            if (allys[0].health <= 0 && allys[1].health <= 0) {
                gameOver()
            }
        }

        case 3: {
            if (allys[0].health <= 0 && allys[1].health <= 0 && allys[2].health <= 0) {
                gameOver()
            }
        }
    }
}

function updateEnemyHPBar() {
    const firstEnemyMaxHP = 80;
    const secondEnemyMaxHP = 80;
    const thirdEnemyMaxHp = 80;

    if (enemyHpBar[0]) {
        const healthPercentageOne = (enemys[0].health / firstEnemyMaxHP) * 100;
        enemyHpBar[0].style.width = `${healthPercentageOne}%`;
    }

    if (enemyHpBar[1]) {
        const healthPercentageTwo = (enemys[1].health / secondEnemyMaxHP) * 100;
        enemyHpBar[1].style.width = `${healthPercentageTwo}%`;
    }

    if (enemyHpBar[2]) {
        const healthPercentageThree = (enemys[2].health / thirdEnemyMaxHp) * 100;
        enemyHpBar[2].style.width = `${healthPercentageThree}%`;
    }

    // condição de vitoria

    const enemyHpBars = enemyHpBar.length

    switch (enemyHpBars) {

        case 1: {
            if (enemys[0].health <= 0) {
                win()
            }
        }

        case 2: {
            if (enemys[0].health <= 0 && enemys[1].health <= 0) {
                win()
            }
        }

        case 3: {
            if (enemys[0].health <= 0 && enemys[1].health <= 0 && enemys[2].health <= 0) {
                win()
            }
        }

    }
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

if (ally[0]) {
    function reduceFirstAllyHP() {
        allys[0].health -= 10
    
        setAllyHp(allys[0], allyHp[0]);
        updateAllyHPBar();
    }
}

if (ally[1]) {
    function reduceSecondAllyHP() {
        allys[1].health -= 10

        setAllyHp(allys[1], allyHp[1]);
        updateAllyHPBar();
    }
}

if (ally[2]) {
    function reduceThirdAllyHP() {
        allys[2].health -= 10

        setAllyHp(allys[2], allyHp[2]);
        updateAllyHPBar();
    }
}

if (enemy[0]) {
    function reduceFirstEnemyHP() {
        enemys[0].health -= 10
    
        setEnemyHp(enemys[0], enemyHp[0]);
        updateEnemyHPBar();
    }
}

if (enemy[1]) {
    function reduceSecondEnemyHP() {
        enemys[1].health -= 10

        setEnemyHp(enemys[1], enemyHp[1]);
        updateEnemyHPBar();
    }
}

if (enemy[2]) {
    function reduceThirdEnemyHP() {
        enemys[2].health -= 10

        setEnemyHp(enemys[2], enemyHp[2]);
        updateEnemyHPBar();
    }
}

// sistema de morte 

if (allyHp.item(0)) {
    function verifyFirstAllyHP() {
        if (allyHp.item(0).textContent <= "0") {
            ally.item(0).style.display = "none"
            allys[0].alive = false;
            allyHp.item(0).style.display = "none"
        }
    }
}

if (allyHp.item(1)) {
    function verifySecondAllyHP() {
        if (allyHp.item(1).textContent <= "0") {
            ally.item(1).style.display = "none"
            allys[1].alive = false;
            allyHp.item(1).style.display = "none"
        }
    }
}

if (allyHp.item(2)) {
    function verifyThirdAllyHP() {
        if (allyHp.item(2).textContent <= "0") {
            ally.item(2).style.display = "none"
            allys[2].alive = false;
            allyHp.item(2).style.display = "none"
        }  
    }
}

if (enemyHp.item(0)) {
    function verifyFirstEnemyHP() {
        if (enemyHp.item(0).textContent <= "0") {
            enemy.item(0).style.display = "none"
            enemys[0].alive = false;
            enemyHp.item(0).style.display = "none"
        }
    }
}

if (enemyHp.item(1)) {
    function verifySecondEnemyHP() {
        if (enemyHp.item(1).textContent <= "0") {
            enemy.item(1).style.display = "none"
            enemys[1].alive = false;
            enemyHp.item(1).style.display = "none"
        }
    }
}

if (enemyHp.item(2)) {
    function verifyThirdEnemyHP() {
        if (enemyHp.item(2).textContent <= "0") {
            enemy.item(2).style.display = "none"
            enemys[2].alive = false;
            enemyHp.item(2).style.display = "none"
        }  
    }
}

// sistema de ataque aleatorio dos inimigos 

const firstEnemy = enemy.item(0);
const secondEnemy = enemy.item(1);
const thirdEnemy = enemy.item(2);

function firstEnemyMonsterAttack() {
    if (enemys[0].alive === true) {
    const aliveAllies = allys.filter(ally => ally.alive === true);
    const randomAlly = aliveAllies[Math.floor(Math.random() * aliveAllies.length)];

        if (ally.item(0)) {
            if (randomAlly.id === 1) {
                setTimeout(() => {
                    firstEnemy.style.bottom = "0"
                    firstEnemy.style.right = "70rem";
                    
            
                    setTimeout(() => {
                        reduceFirstAllyHP()
                        verifyFirstAllyHP()
                        firstEnemy.style.bottom = "1";
                        firstEnemy.style.right = "32rem";
                    }, 2000);
            
                }, 500);
            }
        }

        if (ally.item(1)) {
            if (randomAlly.id === 2) {
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
        }

        if (ally.item(2)){
            if (randomAlly.id === 3) {
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
   }
}

function secondEnemyMonsterAttack() {
    if (enemys[1].alive === true) {
        setTimeout(() => {
            const aliveAllies = allys.filter(ally => ally.alive === true);
            const randomAlly = aliveAllies[Math.floor(Math.random() * aliveAllies.length)];
    
            if(ally.item(0)) {
                if (randomAlly.id === 1) {
    
                    setTimeout(() => {
                        secondEnemy.style.bottom = "0"
                        secondEnemy.style.right = "70rem";
                
                        setTimeout(() => {
                            reduceFirstAllyHP()
                            verifyFirstAllyHP()
                            secondEnemy.style.bottom = "40%"
                            secondEnemy.style.right = "16rem";
                        }, 2000);
                
                   }, 0);
                }
            }
    
            if (ally.item(1)) {
                if (randomAlly.id === 2) {
    
                    setTimeout(() => {
                        secondEnemy.style.bottom = "40%"
                        secondEnemy.style.right = "85rem";
                        
                        setTimeout(() => {
                            reduceSecondAllyHP()
                            verifySecondAllyHP()
                            secondEnemy.style.bottom = "40%";
                            secondEnemy.style.right = "16rem";
                        }, 2000);
                
                   }, 0);
                }
            }
            
            if (ally.item(2)) {
                if (randomAlly.id === 3) {
                    setTimeout(() => {
                        secondEnemy.style.bottom = "0"
                        secondEnemy.style.right = "100rem";
            
                    
                        setTimeout(() => {
                            reduceThirdAllyHP()
                            verifyThirdAllyHP()
                
                            secondEnemy.style.bottom = "40%"
                            secondEnemy.style.right = "16rem";
                        }, 2000);
                    
                    }, 0);
                }
            }
        }, 4000);
    }
}

function thirdEnemyMonsterAttack() {
   if (enemys[2].alive === true) {
    setTimeout(() => {
        const aliveAllies = allys.filter(ally => ally.alive === true);
        const randomAlly = aliveAllies[Math.floor(Math.random() * aliveAllies.length)];

        if (ally.item(0)) {
            if (randomAlly.id === 1) {

                setTimeout(()=>{
                    thirdEnemy.style.bottom = "0"
                    thirdEnemy.style.right = "70rem";
                    
                
                    setTimeout(() => {
                        reduceFirstAllyHP()
                        verifyFirstAllyHP()
                        thirdEnemy.style.bottom = "0";
                        thirdEnemy.style.right = "0";
                    }, 2000);
                    
                }, 0);
            }  
        }

        if (ally.item(1)) {
            if (randomAlly.id === 2) {
                setTimeout(()=>{
                    thirdEnemy.style.bottom = "40%"
                    thirdEnemy.style.right = "85rem";
                
                    setTimeout(() => {
                        reduceSecondAllyHP()
                        verifySecondAllyHP()
                        thirdEnemy.style.bottom = "0";
                        thirdEnemy.style.right = "0";
                    }, 2000);
                    
                }, 0);
            }
        }

        if (ally.item(2)) {
            
            if (randomAlly.id === 3) {
                setTimeout(()=>{
                    thirdEnemy.style.bottom = "0"
                    thirdEnemy.style.right = "100rem";
                   
                    setTimeout(() => {
                        reduceThirdAllyHP()
                        verifyThirdAllyHP()
                        thirdEnemy.style.bottom = "0";
                        thirdEnemy.style.right = "0";
                    }, 2000);
                    
                }, 0);
            }   
        }
    }, 8000);
   }
}

// sistema de ataque aleatorio dos aliados 

const firstAlly = ally.item(0);
const secondAlly = ally.item(1);
const thirdAlly = ally.item(2);

function firstAllyMonsterAttack() {
   if (allys[0].alive === true) {
    const aliveEnemies = enemys.filter(enemy => enemy.alive === true);
    const randomEnemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];

        if (enemy.item(0)) {
            if (randomEnemy.id === 1) {
                setTimeout(() => {
                    firstAlly.style.bottom = "0"
                    firstAlly.style.left = "70rem";
                    
            
                    setTimeout(() => {
                        reduceFirstEnemyHP()
                        verifyFirstEnemyHP()
                        firstAlly.style.bottom = "1";
                        firstAlly.style.left = "32rem";
                    }, 2000);
            
                }, 500);
            }
        }

        if (enemy.item(1)) {
            if (randomEnemy.id === 2) {
                setTimeout(() => {
                    firstAlly.style.bottom = "40%"
                    firstAlly.style.left = "85rem";
                    
            
                    setTimeout(() => {
                        reduceSecondEnemyHP()
                        verifySecondEnemyHP()
                        firstAlly.style.bottom = "0";
                        firstAlly.style.left = "32rem";
                    }, 2000);
            
                }, 500);
            }
        }

        if (enemy.item(2)){
            if (randomEnemy.id === 3) {
                setTimeout(() => {
                    firstAlly.style.bottom = "0"
                    firstAlly.style.left = "100rem";
            
                    setTimeout(() => {
                        reduceThirdEnemyHP()
                        verifyThirdEnemyHP()
                        firstAlly.style.bottom = "0";
                        firstAlly.style.left = "32rem";
                    }, 2000);
            
                }, 500);
            }
    
        }
   }
}

function secondAllyMonsterAttack() {
    if (allys[1].alive === true) {
        setTimeout(() => {
            const aliveEnemies = enemys.filter(enemy => enemy.alive === true);
            const randomEnemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
    
            if(enemy.item(0)) {
                if (randomEnemy.id === 1) {
    
                    setTimeout(() => {
                        secondAlly.style.bottom = "0"
                        secondAlly.style.left = "70rem";
                        
                        setTimeout(() => {
                            reduceFirstEnemyHP()
                            verifyFirstEnemyHP()
                            secondAlly.style.bottom = "40%"
                            secondAlly.style.left = "16rem";
                        }, 2000);
                
                   }, 0);
                }
            }
    
            if (enemy.item(1)) {
                if (randomEnemy.id === 2) {
    
                    setTimeout(() => {
                        secondAlly.style.bottom = "40%"
                        secondAlly.style.left = "85rem";
                        
                        setTimeout(() => {
                            reduceSecondEnemyHP()
                            verifySecondEnemyHP()
                            secondAlly.style.bottom = "40%";
                            secondAlly.style.left = "16rem";
                        }, 2000);
                
                   }, 0);
                }
            }
            
            if (enemy.item(2)) {
                if (randomEnemy.id === 3) {
    
                    setTimeout(() => {
                        secondAlly.style.bottom = "0"
                        secondAlly.style.left = "100rem";
                    
                        setTimeout(() => {
                            reduceThirdEnemyHP()
                            verifyThirdEnemyHP()
                
                            secondAlly.style.bottom = "40%"
                            secondAlly.style.left = "16rem";
                        }, 2000);
                    
                    }, 0);
                }
            }
        }, 4000);
    }
}

function thirdAllyMonsterAttack() {
   if (allys[2].alive === true) {
    setTimeout(() => {
        const aliveEnemies = enemys.filter(enemy => enemy.alive === true);
        const randomEnemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];

        if (enemy.item(0)) {
            if (randomEnemy.id === 1) {

                setTimeout(()=>{
                    thirdAlly.style.bottom = "0"
                    thirdAlly.style.left = "70rem";
                    
                
                    setTimeout(() => {
                        reduceFirstEnemyHP()
                        verifyFirstEnemyHP()
                        thirdAlly.style.bottom = "0";
                        thirdAlly.style.left = "0";
                    }, 2000);
                    
                }, 0);
            }  
        }

        if (enemy.item(1)) {
            if (randomEnemy.id === 2) {
                console.log(allys[1].health)

                setTimeout(()=>{
                    thirdAlly.style.bottom = "40%"
                    thirdAlly.style.left = "85rem";
                
                    setTimeout(() => {
                        reduceSecondEnemyHP()
                        verifySecondEnemyHP()
                        thirdAlly.style.bottom = "0";
                        thirdAlly.style.left = "0";
                    }, 2000);
                    
                }, 0);
            }
        }

        if (enemy.item(2)) {
            
            if (randomEnemy.id === 3) {
                console.log(allys[2].health)

                setTimeout(()=>{
                    thirdAlly.style.bottom = "0"
                    thirdAlly.style.left = "100rem";
                   
                    setTimeout(() => {
                        reduceThirdEnemyHP()
                        verifyThirdEnemyHP()
                        thirdAlly.style.bottom = "0";
                        thirdAlly.style.left = "0";
                    }, 2000);
                    
                }, 0);
            }   
        }
    }, 8000);
   }
}

// sistema de super forma 

const superFormMusic = document.getElementById('super-form-music') as HTMLAudioElement;
const superFormImage = document.querySelectorAll<HTMLImageElement>('.can__super__form__image');
const allyCardDisplay = document.querySelectorAll<HTMLElement>('.can__super__form__display');

superFormMusic.pause()

function superFormTransformation() {

    ally.item(0).classList.add('super__form')
    superFormMusic.play()

    setTimeout(() => {
        allyCardDisplay.item(0).style.width = "100%"
        ally.item(0).style.zIndex = "5"
        allys[0].damage = 60;
        superFormImage.item(0).src = 'https://servidor-estatico-alpha-six.vercel.app/robot-cat--super-form.png';
    }, 3000); 
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

// sistema de criar cartas na mão

const cardFinalDestination = document.getElementById('container-cards') as HTMLElement;
const drawCardButton = document.getElementById('draw-card-button') as HTMLElement;

drawCardButton.addEventListener('click', () => {
    const superForm = document.getElementsByClassName('super__form');

    if (cardFinalDestination.children.length < 3) {
        reduceMana(0);
        containerCardsIcon.style.rotate = "180deg";
        containerCards.style.display = "flex";
        const newCard = document.createElement('div');

        if (superForm.length > 0) {
            const superNova = document.createElement('div');
            superNova.draggable = true;
            superNova.id = 'super-nova';
            superNova.classList.add('skill__card'); 
            superNova.textContent = 'Nuke'; 

            cardFinalDestination.appendChild(superNova);
        } else {
            newCard.draggable = true;
            newCard.id = 'prrfection';
            newCard.classList.add('skill__card'); 
            newCard.textContent = 'Unleash Robot Cat true form'; 
        }
      
       cardFinalDestination.appendChild(newCard);
    } else {
        console.log("Limite de cartas atingido (3)")
    }

});

// sistema de ativar cartas 

const cardHolder = document.getElementById('card-holder') as HTMLElement;
const skillCard = document.getElementsByClassName('skill__card');

// denfinição da tela de vitoria e de derrota

const victoryScreen = document.getElementById('won') as HTMLElement;
const loseScreen = document.getElementById('lose') as HTMLElement;

function win() {
    victoryScreen.style.display = "block"
}

function gameOver() {
    loseScreen.style.display = "block"
}

// sistema de passagem de turnos

const nextTurnButton = document.getElementById('end-turn-button') as HTMLButtonElement;

if (nextTurnButton) {
    nextTurnButton.addEventListener('click', () => {

        firstAllyMonsterAttack() 
        secondAllyMonsterAttack() 
        thirdAllyMonsterAttack()

        setTimeout(() => {
            firstEnemyMonsterAttack() 
            secondEnemyMonsterAttack() 
            thirdEnemyMonsterAttack()
        }, 11400);
    
        increaseMana(0)

       if (skillCard.length > 0) {

            for (let i = 0; i < skillCard.length; i++) {
                if (cardHolder?.contains(skillCard[i])) {

                    if (skillCard.item(i).id = 'prrfection') {
                        superFormTransformation()
                        cardHolder.removeChild(skillCard[i]);
                    } else {
                        reduceEnemyHP();
                        cardHolder.removeChild(skillCard[i]);
                    }
                }
            }
       }
        cardHolder.style.display = "none"
    });
}
