import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('next:', value),
  error: (error) => console.warn('error:', error),
  complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log('Intervalo destruido');
  };
});

/**
 * Subject:
 * 1 - Casteo múltiple
 * 2 - También es un observer
 * 3 - Next, error y complete
 */

const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1: ', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2: ', rnd));

// Los valores de las suscripciones son las mismas con Subject

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  subscription.unsubscribe();
}, 3500);

/**
 * Cuando la data es producida por el observable en sí mismo, es considerado un "Cold Observable".
 * Pero cuando la data es producida FUERA del observable es llamado "Hot Observable"
 * Un Subject transforma un "Cold Observable" en "Hot Observable"
 */
