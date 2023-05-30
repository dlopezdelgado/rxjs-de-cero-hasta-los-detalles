/**
 * sample: Emite el último valor hasta que un segundo observable emita un valor.
 * - es una muestra de cómo esta el observable en el momento que el observable interno emite un valor
 */

import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
  sample(click$)
)
.subscribe(console.log);
