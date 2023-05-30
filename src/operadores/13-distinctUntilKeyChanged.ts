/**
 * distinctUntilKeyChanged: permite pasar valores siempre y cuando el valor de la clave de un objeto de la emisión anterior no sea la misma
 * - Usa el operador de equidad === (mismo tipo y mismo valor)
 * - distinctUntilKeyChanged('k')
 */

import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
  distinctUntilKeyChanged('nombre')
).subscribe(console.log);


