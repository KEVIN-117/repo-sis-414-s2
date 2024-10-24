<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=F, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>
        Fomulario de Registro de Cliente
    </h1>
    <form action="/customer" method="POST">
        @csrf
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name">
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
        <br>
        <label for="phone">Teléfono:</label>
        <input type="text" name="phone" id="phone">
        <br>
        <label for="address">Dirección:</label>
        <input type="text" name="address" id="address">
        <br>
        <button type="submit">Registrar Cliente</button>
    </form>
</body>

</html>
