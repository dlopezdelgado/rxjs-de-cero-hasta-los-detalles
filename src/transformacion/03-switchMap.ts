/**
 * switchMap: recibe un callback que retorna un observable, ese nuevo observable se suscribe a la salida
 * - Sólo mantiene un observable interno suscrito
 * - Si se emite un nuevo valor en el observable principal, switchMap completa el anterior
 * - Cancela la petición anterior
 * Ej: switchMap(() => interval())
 */

import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = '';

  for (const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
/**
 * Tipando todos los observables
 * - No es importante tipar todo, basta sólo con el primero y el último
 */
input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>((event) => event.target['value']),
  mergeMap<string, Observable<GithubUsersResp>>((texto) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
  ),
  map<any, GithubUser[]>((data) => data.items)
);
// .subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$
  .pipe(
    map<KeyboardEvent, string>((event) => event.target['value']),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
