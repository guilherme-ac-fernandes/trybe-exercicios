const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, Endereço: ${order.address.street}, Número ${order.address.number}, apto: ${order.address.apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  // Aplicação do object.keys e tratamento como array observado na resolução no course da trybe
  // source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-fluxo-de-excecao-e-objetos/solutions/069bdfff-c92d-4c55-9e90-94cd03d7553e/gabarito-dos-exercicios/7d2ec100-7848-4dcb-b781-b4d9b2551c55?use_case=calendar
  const typePizzas = Object.keys(order.order.pizza)
  return console.log(`Olá ${order.name}, o total do seu pedido de ${typePizzas[0]}, ${typePizzas[1]} e ${order.order.drinks.coke.type} é R$${order.payment.total},00 reais.`)
}

orderModifier(order);
