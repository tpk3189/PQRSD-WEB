const form = document.getElementById('pqrsd-form');
const mensaje = document.getElementById('mensaje');
const scriptURL = 'https://script.google.com/macros/s/AKfycbztTEvQigIqAsZ03W5BHA1tQRBWsvksfR7m6WSNiX-SNG23iSWQ9Kt_024JUTK5qLg8tQ/exec';

form.addEventListener('submit', e => {
  e.preventDefault();
  mensaje.innerHTML = "Enviando...";

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    mensaje.innerHTML = "Formulario enviado con éxito.";
    form.reset();
  })
  .catch(error => {
    console.error('Error!', error.message);
    mensaje.innerHTML = "Ocurrió un error.";
  });
});

