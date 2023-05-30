/**
 * reduce: Funcion acumuladora a las emisiones producidas por el observable
 * No emite ningun valor sino hasta el momento en que se complete el observable
 */
import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';



const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

// Reduce de JS
const total = numbers.reduce(totalReducer, 0);

console.log('total arr', total);

interval(500).pipe(
  take(6),
  tap(console.log),
  // reduce(totalReducer, 5)
  reduce(totalReducer)
)
.subscribe({
  next: (val) => console.log('next', val),
  complete: () => console.log('complete'),
});
