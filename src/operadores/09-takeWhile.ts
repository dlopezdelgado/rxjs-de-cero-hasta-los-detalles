/**
 * takeWhile: permite recibir valores mientras la condición se cumpla
 * takeWhile (x => x < 4)
 */

import { fromEvent, map } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true)  // Incluye el último valor emitido
  )
  .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('complete'),
  });
