/**
 * throttleTime: Emite un valor y espera x tiempo antes de emitir un nuevo valor, ignorando cualquier otra emisión durante ese tiempo
 * - Parecido al debounceTime
 * - Controla emisiones muy frecuentes
 */

import { asyncScheduler, fromEvent } from 'rxjs';
import { throttleTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

click$.pipe(
  throttleTime(3000)
)
// .subscribe(console.log);

// Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
  // throttleTime(1000),
  throttleTime(400, asyncScheduler, {
    leading: true,  // false: funciona parecido a debounceTime
    trailing: true
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
)
.subscribe(console.log)



