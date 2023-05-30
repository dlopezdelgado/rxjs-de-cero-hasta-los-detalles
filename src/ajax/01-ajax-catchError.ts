import { of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn('error en:', err.message);
  return of([]); // Devuelve observable con array vacío, para no romper la lógica
};

// const fetchPromesa = fetch(url);

// fetchPromesa
//   .then((resp) => resp.json())
//   .then((data) => console.log('data:', data))
//   .catch(err=>console.warn('error en usuarios', err))

// fetchPromesa
//   .then(manejaErrores)
//   .then((resp) => resp.json())
//   .then((data) => console.log('data:', data))
//   .catch((err) => console.warn('error en usuarios', err));

// utilizando la petición ajax

/**
 * catchError: atrapa cualquier error que suceda en un observable
 * - Puede emitir un error o un observable
 */

ajax(url)
  .pipe(
    // map(resp => resp.response)
    pluck('response'),
    catchError(atrapaError)
  )
  .subscribe((users) => console.log('usuarios:', users));
