import { faker } from '@faker-js/faker';

var database = { productos: [] };

for (let ii=0; ii < 220; ii++) {
  database.productos.push({
    id: ii,
    nombre: faker.commerce.productName(),
    descripcion: faker.commerce.productDescription(),
    precio: faker.commerce.price(),
    cantidad: faker.random.numeric(),
    imageUrl: 'https://picsum.photos/400?random=' + ii
  });
}

console.log(JSON.stringify(database));
