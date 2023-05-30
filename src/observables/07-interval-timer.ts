import { interval, timer } from 'rxjs';

/**
 * interval(1000);
 * Observable asíncrono para emitir una secuencia de números en un intérvalo de tiempo especificado
 *
 * timer(2000);
 * Observable que emite el primer valor después de 2 segundos, después no se emiten nuevos valores
 */

const observer = {
  next: (val) => console.log('next: ', val),
  complete: () => console.log('complete'),
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000); // Esto practicamente crea un interval que comienza a los 2 segundos
const timer$ = timer(hoyEn5);

console.log('inicio');

// interval$.subscribe(observer);
timer$.subscribe(observer);

console.log('fin');
