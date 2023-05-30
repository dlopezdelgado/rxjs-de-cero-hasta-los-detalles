import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create()

const observer: Observer<any> = {
  next: (value) => console.log('siguiente [next]', value),
  error: (error) => console.warn('error [obs]', error),
  complete: () => console.info('completado [obs]'),
};

const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');
  // Forzar un error

  // const a = undefined;
  // a.nombre = 'Daniel';

  subs.complete();

  // Esto ya no aparece en la salida, porque el subscriber ya completó, no es usual
  subs.next('Hola');
  subs.next('Mundo');
});

// obs$.subscribe((resp) => console.log(resp));
// Esto es lo mismo que...
// obs$.subscribe(console.log);
// Es lo mismo que...
obs$.subscribe((resp) => {
  console.log(resp);
});

// Configurando las funciones del observable (deprecado)
obs$.subscribe(
  (valor) => console.log('next: ', valor),
  (error) => console.warn('error:', error),
  () => console.info('Completado')
);

// Usando observer
obs$.subscribe(observer);
