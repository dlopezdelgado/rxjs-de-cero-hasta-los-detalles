import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// Se puede cambiar por put y el resultado es el mismo
// ajax.post(
//   url,
//   {
//     id: 1,
//     nombre: 'Daniel',
//   },
//   {
//     'mi-token': 'ABC123',
//   }
// ).subscribe(console.log);

ajax({
  url: url,
  method: 'DELETE', // GET, POST, PUT
  headers: {
    'mi-token': 'ABC123',
  },
  body: {
    id: 1,
    nombre: 'Daniel',
  },
}).subscribe(console.log);
