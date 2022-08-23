import { faker } from '@faker-js/faker';

var database = { productos: [] };

for (let ii=0; ii < 220; ii++) {
  database.productos.push({
    id: ii,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    quantity: faker.random.numeric(),
    imageUrl: 'https://picsum.photos/400?random=' + ii
  });
}

console.log(JSON.stringify(database));
