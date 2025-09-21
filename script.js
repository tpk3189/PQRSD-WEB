const form = document.getElementById('pqrsd-form');
const mensaje = document.getElementById('mensaje');

// REEMPLAZA con tu URL de Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/XXXXXXXXXXX/exec';

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
