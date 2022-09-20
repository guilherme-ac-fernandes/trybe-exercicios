import Person from "../school/Person";
import Order from "./Order";

class OrderRepository {
  constructor(private _orders: Order[] = []){}

  addOrder(newValue: Order): void {
    this._orders.push(newValue);
  }

  removeOrder(removeValue: Order): void {
    const index = this._orders.findIndex((order) => order.id === removeValue.id);
    this._orders.splice(index, 1);
  }

  listByClient(person: Person): Order[] {
    return this._orders.filter((order) => order.client === person);
  }

  listBySortedValue(string: 'maior' | 'menor'): Order[] {
    if (string === 'maior') {
      const ASC = this._orders.sort((a, b) => b.calculateTotal() - a.calculateTotal());
      // console.log(ASC.map((item) => item.calculateTotal()));
      
      return ASC;
    }
    const DESC = this._orders.sort((a, b) => a.calculateTotal() - b.calculateTotal());
    // console.log(DESC.map((item) => item.calculateTotal()));
    return DESC;
  }
}

export default OrderRepository;
