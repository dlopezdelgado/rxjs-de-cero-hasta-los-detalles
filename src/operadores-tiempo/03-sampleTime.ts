/**
 * sampleTime: obtiene el último valor emitido en un intérvalo de tiempo
 */

import { fromEvent, map } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
  sampleTime(2000),   // se recomienda ponerlo primero para evitar el procesamiento innecesario de datos
  map(({ x,y }) => ({ x,y })),
)
.subscribe(console.log);
