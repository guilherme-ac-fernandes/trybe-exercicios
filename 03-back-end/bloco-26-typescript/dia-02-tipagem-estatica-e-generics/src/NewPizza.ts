import Pizza from './Pizza';
import { Common, Sugar, Vegetarian } from './type/Pizza';

interface PizzaCommon extends Pizza {
  flavor: Common,
}

const Calabresa: PizzaCommon = {
  flavor: 'Calabresa',
  slices: 4,
}

const Frango: PizzaCommon = {
  flavor: 'Frango',
  slices: 6,
}

const Pepperoni: PizzaCommon = {
  flavor: 'Pepperoni',
  slices: 8,
}

console.log('========= Common Pizzas =========');
console.table([Calabresa, Frango, Pepperoni]);

interface VegetarianCommon extends Pizza {
  flavor: Vegetarian,
}

const Marguerita: VegetarianCommon = {
  flavor: 'Marguerita',
  slices: 6,
}

const Cogumelo: VegetarianCommon = {
  flavor: 'Cogumelo',
  slices: 4,
}

console.log('======== VegetarianCommon ========');
console.table([Marguerita, Cogumelo]);

interface SugarCommon extends Pizza {
  flavor: Sugar,
}

const Marshmallow: SugarCommon = {
  flavor: 'Marshmallow',
  slices: 4,
}

console.log('========== SugarCommon ==========');
console.table([Marshmallow]);