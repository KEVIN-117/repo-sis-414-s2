const app = document.getElementById("app");

app.innerHTML = `
    <h1 class="text-center"> Datos del formulario </h1>
`;

const button = document.getElementById("enviar");
button.addEventListener("click", () => {
  const nombre = document.getElementById("name").value;
  const correo = document.getElementById("correo").value;

  const h1 = document.createElement("h1"); // <h1></h1>
  h1.className = "text-slate-500 text-2xl"; // <h1 class="text-slate-500 text-2xl"></h1>

  const h2 = document.createElement("h2"); // <h2></h2>
  h1.textContent = `Nombre ${nombre}`; // <h1>Hole valor de nombre</h1>
  h2.innerHTML = `<p class="text-slate-500 text-2xl">Correo: ${correo} </p>`;

  app.appendChild(h1);
  app.appendChild(h2);
  /*
    <div id="app">
        <h1> Datos del formulario </h1>
        <h1>Hole valor de nombre</h1>
    </div>

    <div id="app">
        <h1> Datos del formulario </h1>
        <h1>Hola Kevin Alexis Rodriguez Condori</h1>
    </div>
  */
});

// github.com/KEVIN-117/repo-sis-414-s2
