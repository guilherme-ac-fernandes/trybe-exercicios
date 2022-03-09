// Exercício de Fixação - HOF

const wakeUp = () => 'Acordando!';

const coffeeTime = () => 'Bora tomar café!';

const goToBed = () => 'Partiu dormir!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(coffeeTime);
doingThings(goToBed);