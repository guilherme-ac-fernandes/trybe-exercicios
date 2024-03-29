import Person from '../school/Person';
import OrderItem from './OrderItem';

export enum Payment {
  CARD = 'Cartão',
  MONEY = 'Dinheiro',
  TICKET = 'Vale'
}

class Order {
  private _id: number;
  private _createdAt: Date;

  constructor(
    private _client: Person,
    private _itens: OrderItem[] = [],
    private _paymentMethod: Payment,
    private _discount = 0,
  ) {
    this._id = Math.trunc(Date.now() * (Math.random() + 1));
    this._createdAt = new Date();
    this.client = _client;
    this.itens =  _itens;
    this.paymentMethod = _paymentMethod;
    this.discount = _discount;
  }

  get id(): number {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get client(): Person {
    return this._client;
  }

  set client(value: Person) {
    this._client = value;
  }

  get itens(): OrderItem[] {
    return this._itens
  }

  set itens(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._itens = value;
  }

  get paymentMethod(): Payment {
    return this._paymentMethod;
  }

  set paymentMethod(value: Payment) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0 || value > 1) {
      throw new Error('O desconto deve estar entre 0 e 1.');
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this.itens.reduce((acc, curr) => {
      acc += curr.price;
      return acc;
    }, 0)
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

export default Order;
