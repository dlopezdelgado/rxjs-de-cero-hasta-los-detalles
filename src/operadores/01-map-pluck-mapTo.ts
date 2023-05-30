import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

/**
 * map: transforma el valor y devuelve la emisión nueva
 * pluck: obtiene el valor de un key de un objeto emitido
 * mapTo: transforma la entrada en una salida específica
 */

// range(1, 5)
//   .pipe(map<number, number>((val) => val * 10))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(map((event) => event.code));

const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'));


const keyupMapTo$ = keyup$.pipe(mapTo('tecla presionada'));

keyup$.subscribe(console.log);
keyupCode$.subscribe((code) => console.log('map', code));
keyupPluck$.subscribe((code) => console.log('pluck', code));
keyupMapTo$.subscribe((code) => console.log('mapTo', code));
