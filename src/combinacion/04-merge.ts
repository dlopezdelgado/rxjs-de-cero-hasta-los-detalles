/**
 * merge: función que recibe uno o más observables y el resultado es la combinación de todos los observables juntos
 * - Cada emisión sale inmediatamente, el orden de salida es según el primero que emita
 * - Se completa cuando todos los observables se completen
 * Ej: merge(obs1$, obs$2)
 */

import { fromEvent, merge, pluck } from 'rxjs';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
  keyup$.pipe(pluck('type')), 
  click$.pipe(pluck('type')))
.subscribe(
  console.log
);
