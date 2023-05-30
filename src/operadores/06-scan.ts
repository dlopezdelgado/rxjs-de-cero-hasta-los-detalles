/**
 * scan: cuando los valores son emitidos, van saliendo conforme van ingresando, pero conservan el valor acumulado
 * A diferencia de reduce, scan saca los valores emitidos, mientras que reduce solo devuelve el acumulado
 */

import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce: única emisión del valor acumulado
from(numeros).pipe(
  reduce(totalAcumulador, 0)
)
.subscribe(console.log);

// Scan: en cada emisión está mostrando cada acumulado
from(numeros).pipe(
  scan(totalAcumulador, 0)
)
.subscribe(console.log);

// Ejemplo tipo Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: 'dld', autenticado: false, token: null},
  { id: 'dld', autenticado: true, token: 'ABC'},
  { id: 'dld', autenticado: true, token: 'ABC123'},
];


const state$ = from(user).pipe(
  scan<Usuario, Usuario>( (acc, cur) => {
    return {...acc, ...cur}
  }, {edad: 33})
);

const id$ = state$.pipe(
  map(state => state)
);

id$.subscribe(console.log);


