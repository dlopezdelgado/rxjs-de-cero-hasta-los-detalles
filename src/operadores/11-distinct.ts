/**
 * distinct: permite pasar únicamente los valores que no han sido previamente emitidos por el observable
 */

import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numeros$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, '1');

numeros$
  .pipe(
    distinct() // usa ===
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
    nombre: 'Megaman',
  },
  {
    nombre: 'Zero',
  },
];

from(personajes).pipe(
  // No es lo mismo entre objetos, pues la referencia de memoria cambia, hay que adicionar un predicado al distinct
  distinct(p => p.nombre)
).subscribe(console.log);


