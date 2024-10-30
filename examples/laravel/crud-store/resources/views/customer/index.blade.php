<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        table {
            width: 100%;

        }

        a {
            text-decoration: none;
            color: blue;
            background: lightblue;
            padding: 5px;
        }
    </style>
</head>

<body>
    <div>
        <h1>Customer List</h1>

        <a href="/customer/create">Crear Nuevo Cliente</a>
    </div>
    <table border="1">
        <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Customer Phone</th>
            <th>Customer Address</th>
            <th>Actions</th>
        </tr>
        @foreach ($customers as $customer)
            <tr>
                <td>{{ $customer->id }}</td>
                <td>{{ $customer->name }}</td>
                <td>{{ $customer->email }}</td>
                <td>{{ $customer->phone }}</td>
                <td>{{ $customer->address }}</td>
                <td>
                    <a href="/customer/{{ $customer->id }}/edit">Edit</a>
                    <a href="/customer/{{ $customer->id }}/delete">Delete</a>
                </td>
            </tr>
        @endforeach
    </table>
</body>

</html>
