
import Order, { Payment } from "./Order";
import OrderItem from "./OrderItem";
import Student from "../school/Student";
import Subject from "../school/Subject";
import Teacher from "../school/Teacher";
import OrderRepository from "./OrderRepository";

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const carolinaOrder = new Order(carolina, [sandwiche, juice, dessert], Payment.MONEY, 0.10);
const lucasOrder = new Order(lucas, [sandwiche, juice], Payment.MONEY, 0.10);
const martaOrder = new Order(marta, [sandwiche, juice], Payment.CARD);
const joaoOrder = new Order(joao, [sandwiche, juice, dessert], Payment.CARD);

const orderRepository = new OrderRepository();
orderRepository.addOrder(carolinaOrder);
orderRepository.addOrder(lucasOrder);
orderRepository.addOrder(martaOrder);
orderRepository.addOrder(joaoOrder);
orderRepository.addOrder(carolinaOrder);

console.log('Pedidos da Carolina: ', orderRepository.listByClient(carolina));
console.log('Maior valor para o menor: ', orderRepository.listBySortedValue('maior'));
console.log('Menor valor para o maior: ', orderRepository.listBySortedValue('menor'));