/**
 * distinctUntilChanged: permite pasar valores siempre y cuando la emisión anterior no sea la misma
 * - Usa el operador de equidad === (mismo tipo y mismo valor)
 */

import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, '1');

numeros$
  .pipe(
    distinctUntilChanged() // usa ===
  )
  .subscribe(console.log);

// Ejercicio más real
interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Zero',
  },
  {
    nombre: 'Dr. Willy',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Zero',
  },
];

from(personajes).pipe(
  // No es lo mismo entre objetos, pues la referencia de memoria cambia, hay que hacer una funcion comparativa que retorna boolean
  distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);


