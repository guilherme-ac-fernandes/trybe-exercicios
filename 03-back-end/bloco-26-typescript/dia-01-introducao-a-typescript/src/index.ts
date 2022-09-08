// Resolução baseada no gabarito presente no course da trybe
// source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/4e3b7d3a-94a1-4fce-9545-0f2b04f8ccd9/day/f2bc13d9-91a6-488b-aa3f-257b0f5bb449/lesson/32b40011-0300-45ba-b73c-7ef1013c8411/solution

import readline from "readline-sync";
import Months from "./Months";
import Seasons from "./Seasons";

const monthNames = Object.values(Months);
const choiceMonth = readline
  .keyInSelect(monthNames, "Escolha um mês do ano");

const seasonsSouth = {
  [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
};

const seasonsNorth = {
  [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
  [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
  [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
};

const hemispheres = {
  "Norte": seasonsNorth,
  "Sul": seasonsSouth
};

const choiceHemisphere = readline
  .keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");

const month = Object.values(Months)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log('----------------------------');
console.log(`🗓 - Mês: ${month}`);
console.log(`🌎 - Hemisfério: ${hemisphere}`);
console.log('----------------------------');
console.log(`🌤 - Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];
  if (months.includes(month)) console.log(seasons);
});
console.log('----------------------------');
