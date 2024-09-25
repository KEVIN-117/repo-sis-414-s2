const app = document.getElementById("app");

app.innerHTML = `
    <h1> Datos del formulario </h1>
`;

const button = document.getElementById("enviar");
button.addEventListener("click", () => {
  const nombre = document.getElementById("name").value;

  const h1 = document.createElement("h1"); // <h1></h1>
  h1.textContent = `Hola ${nombre}`; // <h1>Hole valor de nombre</h1>
  app.appendChild(h1);
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
