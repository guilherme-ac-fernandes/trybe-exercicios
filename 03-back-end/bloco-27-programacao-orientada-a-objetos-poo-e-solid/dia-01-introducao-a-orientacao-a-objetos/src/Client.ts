class Client {
  private _name = String();

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }
    
  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value < 0) {
      throw new Error('O preço deve ser positivo.')
    }
    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _itens: OrderItem[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Client,
    itens: OrderItem[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this.itens =  itens;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
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

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value <= 0 || value > 1) {
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

const client = new Client('João');
const sandwich = new OrderItem('Sanduíche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxi', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(
  client, 
  [sandwich, juice, dessert],
  'dinheiro',
  0.10,
);

console.log(order);
console.log(order.calculateTotal());
console.log(order.calculateTotalWithDiscount());

