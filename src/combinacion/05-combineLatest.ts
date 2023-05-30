/**
 * combineLatest: Función que nos permite mandar observables como argumentos, combinarlos y emitir los valores de todos los observables internos simultáneamente
 * - Regresa un nuevo observable que emitirá valores hasta que todos los observables internos hayan emitido al menos un valor
 * - Los valores salen en un array con los valores de los observables
 * - Si ya han emitido valor todos los observables y se emite un nuevo valor, la salida será la combinación de los valores con el último valor
 * Ej: combineLatest(obs1$, obs2$)
 */

import { combineLatest, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//   keyup$.pipe(map((ev) => ev.type)),
//   click$.pipe(map((ev) => ev.type))
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, 'keyup').pipe(map((ev) => ev.target['value']));

combineLatest(
  getInputStream(input1),
  getInputStream(input2),
).subscribe(console.log);
