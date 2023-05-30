/**
 * exhaustMap:
 * - Flattening operator (Aplanamiento)
 * - Cuando el source emite un nuevo valor, exhaustMap lo ignora, manteniendo la suscripción a la anterior emisión
 * - Sólo mantiene una suscripción activa antes de permitir una nueva suscripción
 * - Útil cuando tenemos observables que emite muchos valores que se pueden ignorar (doble submit con varios enters...)
 *
 * Ej: exhaustMap(() => interval$.pipe(take(3)))
 */

import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take, tap } from 'rxjs/operators';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
  exhaustMap(() => interval$)
)
.subscribe(console.log)
