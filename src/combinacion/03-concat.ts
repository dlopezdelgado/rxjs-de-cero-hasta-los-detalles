/**
 * concat: Función que recibe observables, iterable o un array como argumento, usualmente observables.
 * - Crea un nuevo observable con los argumentos recibidos
 * - Los siguientes observables no se ejecutan hasta que el anterior se complete
 * - Cada vez que se complete un observable, continua con el siguiente
 * - Se completa una vez todos los observables que se envían como argumento se completen
 * Ej: concat( obs1$, obs2$, obs3$)
 */

import { concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  [1, 2, 3, 4]
).subscribe(console.log);
