const users = [];

function onSubmit(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let correo = e.target.correo.value;

  const data = {
    name,
    correo,
  };

  users.push(data);
  e.target.reset();
  buildApp();
}

function buildData(label, value) {
  return `
    <div class="flex justify-between border-2 border-blue-900"> 
      <p class="text-slate-500 text-2xl"> ${label} </p>
      <p class="text-slate-500 text-2xl"> ${value} </p>
    </div>
  `;
}

function renderData(data, index) {
  const { name, correo } = data; // const name = data.name

  const dataFormatName = buildData("Nombre", name);
  const dataFormatEmail = buildData("Correo", correo);

  const app = document.getElementById("app");
  const container = document.createElement("div");
  container.innerHTML = `
    <h1 class="text-center"> Datos del formulario ${index} </h1>
    ${dataFormatName}
    ${dataFormatEmail}
  `;
  app.appendChild(container);
}

function buildApp() {
  console.log(users);
  const app = document.getElementById("app");
  app.innerHTML = ``;
  users.forEach((user, index) => renderData(user, index + 1));
}
