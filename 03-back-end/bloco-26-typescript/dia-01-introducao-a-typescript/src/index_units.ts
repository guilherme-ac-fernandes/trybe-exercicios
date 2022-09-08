// Resolução baseada no gabarito presente no course da trybe
// source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/4e3b7d3a-94a1-4fce-9545-0f2b04f8ccd9/day/f2bc13d9-91a6-488b-aa3f-257b0f5bb449/lesson/32b40011-0300-45ba-b73c-7ef1013c8411/solution

import readline from "readline-sync";

const scripts = [
  { name: "Converter comprimento", script: "./Length" },
  { name: "Converter massa", script: "./Mass" },
  { name: "Converter capacidade", script: "./Capacity" },
  { name: "Converter área", script: "./Area" },
  { name: "Converter volume", script: "./Volume" }
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, "Escolha um mês do ano");

require(scripts[choice].script);
