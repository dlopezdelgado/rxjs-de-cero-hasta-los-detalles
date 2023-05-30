/**
 * concatMap: Se suscribe a observables internos, concatena al último valor emitido cuando el observable anterior se completa
 * - Operador de aplaneamiento (Flattening operator)
 * - El nuevo observable no se ejecuta sino hasta el momento en que se complete el anterior
 * - Se genera una cola de observables para suscribir
 * Ej: concatMap(() => interval$.pipe(take(3)) )
 */

import { fromEvent, interval } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
  concatMap(() => interval$)
)
.subscribe(console.log)
