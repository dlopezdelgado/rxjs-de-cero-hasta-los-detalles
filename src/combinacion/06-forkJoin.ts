/**
 * forkJoin: Recibe varios observables
 * - Resultado: Emite un array con el último valor emitido de los observables en el momento en que todos los observables internos se completan
 * forkJoin(obs1$, obs2$, obs3$)
 */

import { forkJoin, interval, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//   numeros$,
//   intervalo$,
//   letras$)
// .subscribe(console.log);

// forkJoin(
//   numeros$,
//   intervalo$,
//   letras$)
// .subscribe(resp => {
//   console.log('numeros:', resp[0]);
//   console.log('intérvalo:', resp[1]);
//   console.log('letras:', resp[2]);
// });

// forkJoin({
//   numeros$,
//   intervalo$,
//   letras$,
// }).subscribe((resp) => {
//   console.log(resp);
// });


// Con nombres de llaves diferentes

forkJoin({
  num: numeros$,
  int: intervalo$,
  let: letras$,
}).subscribe((resp) => {
  console.log(resp);
});