/**
 * mergeMap: Recibe el valor emitido de un observable inicial y regresa un nuevo observable
 * - Operador de aplanamiento (Flattening operator)
 * - Emite el valor producto de la suscripción interna
 * - No tiene límite de suscripción interna
 * - Todos pueden estar activos simultáneamente
 * - El complete se da cuando se completen todos los observables internos y el externo
 */

import { fromEvent, interval, of } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');

letras$.pipe(
  mergeMap((letra) =>
    interval(1000).pipe(
      map((i) => letra + i),
      take(3)
    )
  )
);
// .subscribe({
//   next: (val) => console.log('next:', val),
//   complete: () => console.log('complete'),
// });

/**
 * este ejemplo toma un observable al presionar el mouse, y toma el tiempo hasta que se suelta el botón del mouse
 */
const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseup$)
  ))
)
.subscribe(console.log);
