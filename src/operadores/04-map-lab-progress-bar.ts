import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis velit, vehicula at diam ut, malesuada efficitur lacus. Etiam facilisis quis mauris non mollis. Pellentesque ultricies a justo quis placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse leo ipsum, rutrum sit amet aliquet eget, porttitor et augue. Etiam a varius felis. Sed lectus mi, efficitur vel faucibus et, auctor vitae nunc.
<br /><br />
In et pulvinar nisl. Vestibulum interdum, lectus in porta sodales, quam sapien pretium elit, in cursus nulla quam et ligula. Cras porttitor leo sem. Cras mollis interdum arcu sodales ultrices. Aenean dapibus lorem quis mollis sagittis. Proin placerat vulputate diam a hendrerit. Quisque tellus elit, iaculis nec dolor vitae, auctor posuere massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis lectus, ultricies vitae diam nec, varius euismod eros.
<br /><br />
Quisque pellentesque dignissim aliquam. Curabitur id libero aliquet, facilisis massa sed, consequat leo. Sed rhoncus pretium quam, at tempus justo tempor sit amet. Suspendisse vel lobortis tellus, vel viverra orci. Pellentesque in odio lacus. Nullam porttitor metus tortor, eget vestibulum lacus commodo a. Quisque bibendum sodales nibh quis ultricies. Mauris non turpis aliquet, fringilla neque et, suscipit sem. Mauris vel ultrices lectus, quis fermentum risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus sit amet massa id tempor. Donec interdum nunc porta quam consectetur elementum.
<br /><br />
Mauris eget vehicula nulla. Donec placerat, odio ut pharetra gravida, neque turpis accumsan ex, non ultrices dui ipsum non nulla. Cras elementum, massa sit amet porttitor pulvinar, diam justo tempor augue, vitae fringilla felis ipsum ut ipsum. Aenean imperdiet vehicula ipsum, eu sodales nunc elementum fermentum. Nunc dictum nisl a tortor tincidunt egestas. Phasellus suscipit nisi eu purus volutpat, et pharetra urna molestie. Phasellus ullamcorper neque risus, convallis tincidunt libero volutpat finibus. Ut sed odio at est dignissim tincidunt. Vivamus eu metus scelerisque, dignissim risus at, posuere dolor. In pretium sem urna, id imperdiet justo dignissim at. Duis quis venenatis massa. Ut ultrices, lorem vitae tempor luctus, odio odio sagittis nunc, eu iaculis risus justo ut leo. Pellentesque nec porttitor elit. Ut eu mollis neque. Nam tempus, nulla sodales suscipit suscipit, orci nisl efficitur dolor, sit amet molestie magna metus nec nibh. Sed nunc augue, commodo vel convallis at, vestibulum ut tellus.
<br /><br />
Praesent vehicula elit quis tellus pulvinar ultrices. Integer volutpat felis eu volutpat maximus. Praesent non scelerisque nibh. Nam in libero quis lectus tempor suscipit. Proin volutpat sagittis urna, et porttitor neque consequat sit amet. Mauris commodo felis non eros rutrum pellentesque. Nullam ac nulla eu massa dictum posuere sed at erat.
<br /><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis velit, vehicula at diam ut, malesuada efficitur lacus. Etiam facilisis quis mauris non mollis. Pellentesque ultricies a justo quis placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse leo ipsum, rutrum sit amet aliquet eget, porttitor et augue. Etiam a varius felis. Sed lectus mi, efficitur vel faucibus et, auctor vitae nunc.
<br /><br />
In et pulvinar nisl. Vestibulum interdum, lectus in porta sodales, quam sapien pretium elit, in cursus nulla quam et ligula. Cras porttitor leo sem. Cras mollis interdum arcu sodales ultrices. Aenean dapibus lorem quis mollis sagittis. Proin placerat vulputate diam a hendrerit. Quisque tellus elit, iaculis nec dolor vitae, auctor posuere massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis lectus, ultricies vitae diam nec, varius euismod eros.
<br /><br />
Quisque pellentesque dignissim aliquam. Curabitur id libero aliquet, facilisis massa sed, consequat leo. Sed rhoncus pretium quam, at tempus justo tempor sit amet. Suspendisse vel lobortis tellus, vel viverra orci. Pellentesque in odio lacus. Nullam porttitor metus tortor, eget vestibulum lacus commodo a. Quisque bibendum sodales nibh quis ultricies. Mauris non turpis aliquet, fringilla neque et, suscipit sem. Mauris vel ultrices lectus, quis fermentum risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus sit amet massa id tempor. Donec interdum nunc porta quam consectetur elementum.
<br /><br />
Mauris eget vehicula nulla. Donec placerat, odio ut pharetra gravida, neque turpis accumsan ex, non ultrices dui ipsum non nulla. Cras elementum, massa sit amet porttitor pulvinar, diam justo tempor augue, vitae fringilla felis ipsum ut ipsum. Aenean imperdiet vehicula ipsum, eu sodales nunc elementum fermentum. Nunc dictum nisl a tortor tincidunt egestas. Phasellus suscipit nisi eu purus volutpat, et pharetra urna molestie. Phasellus ullamcorper neque risus, convallis tincidunt libero volutpat finibus. Ut sed odio at est dignissim tincidunt. Vivamus eu metus scelerisque, dignissim risus at, posuere dolor. In pretium sem urna, id imperdiet justo dignissim at. Duis quis venenatis massa. Ut ultrices, lorem vitae tempor luctus, odio odio sagittis nunc, eu iaculis risus justo ut leo. Pellentesque nec porttitor elit. Ut eu mollis neque. Nam tempus, nulla sodales suscipit suscipit, orci nisl efficitur dolor, sit amet molestie magna metus nec nibh. Sed nunc augue, commodo vel convallis at, vestibulum ut tellus.
<br /><br />
Praesent vehicula elit quis tellus pulvinar ultrices. Integer volutpat felis eu volutpat maximus. Praesent non scelerisque nibh. Nam in libero quis lectus tempor suscipit. Proin volutpat sagittis urna, et porttitor neque consequat sit amet. Mauris commodo felis non eros rutrum pellentesque. Nullam ac nulla eu massa dictum posuere sed at erat.
<br /><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis velit, vehicula at diam ut, malesuada efficitur lacus. Etiam facilisis quis mauris non mollis. Pellentesque ultricies a justo quis placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse leo ipsum, rutrum sit amet aliquet eget, porttitor et augue. Etiam a varius felis. Sed lectus mi, efficitur vel faucibus et, auctor vitae nunc.
<br /><br />
In et pulvinar nisl. Vestibulum interdum, lectus in porta sodales, quam sapien pretium elit, in cursus nulla quam et ligula. Cras porttitor leo sem. Cras mollis interdum arcu sodales ultrices. Aenean dapibus lorem quis mollis sagittis. Proin placerat vulputate diam a hendrerit. Quisque tellus elit, iaculis nec dolor vitae, auctor posuere massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis lectus, ultricies vitae diam nec, varius euismod eros.
<br /><br />
Quisque pellentesque dignissim aliquam. Curabitur id libero aliquet, facilisis massa sed, consequat leo. Sed rhoncus pretium quam, at tempus justo tempor sit amet. Suspendisse vel lobortis tellus, vel viverra orci. Pellentesque in odio lacus. Nullam porttitor metus tortor, eget vestibulum lacus commodo a. Quisque bibendum sodales nibh quis ultricies. Mauris non turpis aliquet, fringilla neque et, suscipit sem. Mauris vel ultrices lectus, quis fermentum risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus sit amet massa id tempor. Donec interdum nunc porta quam consectetur elementum.
<br /><br />
Mauris eget vehicula nulla. Donec placerat, odio ut pharetra gravida, neque turpis accumsan ex, non ultrices dui ipsum non nulla. Cras elementum, massa sit amet porttitor pulvinar, diam justo tempor augue, vitae fringilla felis ipsum ut ipsum. Aenean imperdiet vehicula ipsum, eu sodales nunc elementum fermentum. Nunc dictum nisl a tortor tincidunt egestas. Phasellus suscipit nisi eu purus volutpat, et pharetra urna molestie. Phasellus ullamcorper neque risus, convallis tincidunt libero volutpat finibus. Ut sed odio at est dignissim tincidunt. Vivamus eu metus scelerisque, dignissim risus at, posuere dolor. In pretium sem urna, id imperdiet justo dignissim at. Duis quis venenatis massa. Ut ultrices, lorem vitae tempor luctus, odio odio sagittis nunc, eu iaculis risus justo ut leo. Pellentesque nec porttitor elit. Ut eu mollis neque. Nam tempus, nulla sodales suscipit suscipit, orci nisl efficitur dolor, sit amet molestie magna metus nec nibh. Sed nunc augue, commodo vel convallis at, vestibulum ut tellus.
<br /><br />
Praesent vehicula elit quis tellus pulvinar ultrices. Integer volutpat felis eu volutpat maximus. Praesent non scelerisque nibh. Nam in libero quis lectus tempor suscipit. Proin volutpat sagittis urna, et porttitor neque consequat sit amet. Mauris commodo felis non eros rutrum pellentesque. Nullam ac nulla eu massa dictum posuere sed at erat.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight) * 100);
};

// streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map((event) => calcularPorcentajeScroll(event)) O se puede...
  map(calcularPorcentajeScroll),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
