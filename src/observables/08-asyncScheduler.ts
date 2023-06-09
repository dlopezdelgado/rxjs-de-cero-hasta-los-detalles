import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// Equivalente a setTimeout();
// asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'Daniel');

// equivalente a un setInterval();
// No permite usar arrow functions
const subs = asyncScheduler.schedule(
  function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

// Lo mismo con asyncSheduler
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
