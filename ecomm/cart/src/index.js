import faker from "faker";

const carText = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = carText;