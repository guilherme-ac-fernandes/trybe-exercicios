import { Slices } from "./type/Slices";

interface Pizza {
  flavor: string,
  slices: Slices,
}

const Calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8,
}

const Marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
}

const Nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4,
}

console.table([Calabresa, Marguerita, Nutela]);

export default Pizza;
