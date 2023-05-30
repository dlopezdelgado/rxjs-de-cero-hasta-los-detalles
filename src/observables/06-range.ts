import { asyncScheduler, of, range } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5);
// Para muchos valores se puede usar un range síncrono
// const src$ = range(1, 5);
// Para volver el range asincrono
const src$ = range(1, 5, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
