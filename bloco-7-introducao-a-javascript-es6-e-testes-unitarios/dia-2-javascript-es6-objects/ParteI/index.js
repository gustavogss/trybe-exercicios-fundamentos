const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
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
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {    
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const clientName = order.name;
    const clientPhone = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const numberApartment = order.address.apartment;
  console.log(`Olá ${deliveryPerson}, entrega para ${clientName}, Telefone: ${clientPhone},
  ${street}, n. ${number}, Apto ${numberApartment} `);
};

customerInfo(order);

const orderModifier = (order) => {
  const client2Name = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá, ${client2Name} o total do seu pedido de ${pizzas[0]}, 
  ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
};

orderModifier(order);
