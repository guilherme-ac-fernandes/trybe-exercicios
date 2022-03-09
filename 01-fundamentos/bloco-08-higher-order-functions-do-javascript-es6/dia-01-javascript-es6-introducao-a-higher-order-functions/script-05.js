// Exercício de Fixação Bônus - HOF

// Parte 1 - Game Actions Simulator
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Cálcular Demage aleatório
// Documentação da fonte do código para gerar número aleatório entre máximo e mínimo (link: https://www.w3schools.com/js/js_random.asp)
const calculateDamage = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

// Função para retorna o dano do dragão aleatoriamente
const dragonAttack = () => calculateDamage(15, dragon.strength);

// Função para retorna o dano do warrior aleatoriamente
const warriorAttack = () => calculateDamage(warrior.strength, (warrior.strength * warrior.weaponDmg));

// Função para retorna o dano e mana do mago aleatoriamente
// A forma de guardar as informações proveniente da resolução presente no course da Trybe 
// source: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-introducao-a-higher-order-functions-gabarito/solutions/bc8c308b-213f-484a-97ec-9b551170c458/conteudos/a147dc13-ec19-4f9d-845b-3381af148264?use_case=calendar
const mageAttack = () => {
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Não possui mana suficiente',
  }
  if (mage.mana > 15) {
    const mageDamage = calculateDamage(mage.intelligence, (mage.intelligence * 2));
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
}

// Parte 2 - Game Actions Simulator

const gameActions = {
  warrior: (callback) => {
    const warriorTurn = callback();
    warrior.damage += warriorTurn;
    dragon.healthPoints -= warriorTurn;
  },
  mage: (callback) => {
    const mageTurns = callback();
    mage.mana -= mageTurns.manaSpent;
    mage.damage += mageTurns.damageDealt;
    dragon.healthPoints -= mageTurns.damageDealt;
  },
  dragon: (callback) => {
    const dragonTurns = callback();
    dragon.damage += dragonTurns;
    warrior.healthPoints -= dragonTurns;
    mage.healthPoints -= dragonTurns;
  },
  result: () => console.log(battleMembers),
};

// Função para remover o undefined do objeto dos membros da batalha
const startGame = () => {
  warrior.damage = 0;
  mage.damage = 0;
  dragon.damage = 0;
}

// Função de avaliação healthPoints e ver quem ganhou
const statusMembers = () => {
  const warriorStatus = (warrior.healthPoints <= 0) ? 'Warrior perdeu ❌ ' : 'Warrior em batalha ✅ ';
  const mageStatus = (mage.healthPoints <= 0) ? 'Mago perdeu ❌ ' : 'Mago em batalha ✅ ';
  const dragonStatus = (dragon.healthPoints <= 0) ? 'Dragão perdeu ❌ ' : 'Dragão em batalha ✅ ';
  const status = `
  ${mageStatus}
  ${warriorStatus}
  ${dragonStatus}`; 
  return console.log(status);
}

// Função para não ter números negativos proveniente do staroverflow, mas com alterações para simplicar
// source: https://stackoverflow.com/questions/5842747/how-can-i-use-javascript-to-limit-a-number-between-a-min-max-value
function limitNumberWithinRange(num, max = 350){
  return Math.min(Math.max(num, 0), max)
}

// Função mudança healthPoints para valores não negativos
const alwaysPositive = () => {
  warrior.healthPoints = limitNumberWithinRange(warrior.healthPoints);
  mage.healthPoints = limitNumberWithinRange(mage.healthPoints);
  dragon.healthPoints = limitNumberWithinRange(dragon.healthPoints);
}

// Função que realiza os ataques
const battleTurn = (number = 1) => {
  startGame(); // Remove undefined de damage no objeto dos membros da batalha
  for (let i = 0; i < number; i += 1) {
    gameActions.warrior(warriorAttack);
    gameActions.mage(mageAttack);
    gameActions.dragon(dragonAttack);
  } // Loop de repetição da batalha
  alwaysPositive(); // Introduz um limite inferior (zero) dos healthPoints dos membros
  gameActions.result(); // Imprime as especificações de cada membro
  statusMembers(); // Informa o status de todos os membros
}

battleTurn(6);
