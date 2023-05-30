/**
 * startWith: Permite hacer una emisión antes de que el observable empiece a emitir.
 * - Ej: startWith('a') => comienza el observable emitiendo 'a'
 * 
 * endWith: Permite hacer una emisión después de que el observable se complete
 * - Ej:endWith('s')
 */

import { of } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';

const numeros$ = of(1, 2, 3).pipe(
  startWith('a', 'b', 'c'),
  endWith('x', 'y', 'z')
);

numeros$.subscribe(console.log);
