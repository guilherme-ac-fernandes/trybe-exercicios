// Resolução baseada no gabarito presente no course da trybe
// source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/4e3b7d3a-94a1-4fce-9545-0f2b04f8ccd9/day/f2bc13d9-91a6-488b-aa3f-257b0f5bb449/lesson/32b40011-0300-45ba-b73c-7ef1013c8411/solution

import readline from "readline-sync";
const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convert(value: number, fromUnit: string, toUnit: string) : number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
}

function exec(): void {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const fromUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a unidade base:");
  const toUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a conversão:");

  const fromUnitChoice = units[fromUnitChoiceIndex];
  const toUnitChoice = units[toUnitChoiceIndex];

  const result = convert(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
}

exec();