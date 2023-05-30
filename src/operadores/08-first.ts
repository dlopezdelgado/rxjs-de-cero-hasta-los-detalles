/**
 * first: Se completa con la primera emisión del observable
 *  - Se le puede asignar condicion para dar salida
 */

import { fromEvent } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

// click$
//   .pipe(
//     tap<PointerEvent>(() => console.log('tap')),
//     first<PointerEvent>((event) => event.clientY >= 150)
//   )
//   .subscribe({
//     next: (val) => console.log('next: ', val),
//     complete: () => console.log('complete'),
//   });


// Otro ejemplo
click$
  .pipe(
    tap<PointerEvent>(() => console.log('tap')),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((event) => event.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('complete'),
  });
