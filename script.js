// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pqrsd-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre) {
      alert("Por favor ingresa tu nombre.");
      return;
    }
    if (!correo || !correo.includes("@")) {
      alert("Por favor ingresa un correo válido.");
      return;
    }
    if (!mensaje) {
      alert("Por favor escribe tu mensaje.");
      return;
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyQo9gLX-PEUXYT3JuOS09N8a0URGrE-HfCYDDrNVVkw20t_EmHkaI8NPLdeArZ4TSQgg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, correo, mensaje })
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("¡Encuesta enviada correctamente!");
        form.reset();
      } else {
        alert("Hubo un problema: " + (result.mensaje || "Error desconocido"));
      }

    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al conectar con el servidor. Intenta de nuevo más tarde.");
    }
  });
});


