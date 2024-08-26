# TypeScript inicio rápido

TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript que añade tipado estático y objetos basados en clases.

- veamos un ejemplo haciendo la comparación entre JavaScript y TypeScript:

```javascript
// JavaScript
class Greeter {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}


console.log(saludar("Mundo"));

// TypeScript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter
```

## Intalemos TypeScript

Anbtes de proceder a la instalacion de ts verifiquemos si ya lo tenemos instalado en nuestra computadora, para ello abrimos la terminal y escribimos el siguiente comando:

```bash
tsc -v
```

Si no tienes instalado TypeScript, puedes instalarlo utilizando el siguiente comando:
- Podriamos instalarlo de manera global con
```bash
npm install -g typescript
```
- O si lo prefieres puedes instalarlo de manera local en tu proyecto con
```bash
npm install typescript
```

- llegado hasta este punto ya deberias tener instalado TypeScript para verificar que se instalo correctamente ejecuta el comando que utilizamos al principio


## Como funciona el compilador de TypeScript

El compilador de TypeScript es una herramienta que convierte el código TypeScript en código JavaScript. Para compilar un archivo de TypeScript, sigue los siguientes pasos:

1. Crea un archivo con extensión `.ts`.
2. Escribe el código que desees.
3. Abre la terminal y navega hasta la ubicación del archivo.
4. Escribe el siguiente comando:

```bash
tsc nombre_del_archivo.ts
```

Si todo salió bien, verás un archivo con extensión `.js` en la misma ubicación del archivo de TypeScript.

- Otra forma de compilar un archivo de TypeScript es utilizando el siguiente comando:

```bash
tsc --watch nombre_del_archivo.ts // para que se compile automaticamente cada vez que guardes el archivo

tsc nombre_del_archivo.ts --outDir ./dist // para que se compile en una carpeta dist

tsc nombre_del_archivo.ts --target es5 // para que se compile en una version de js especifica
```

- o puedes generar el archivo de configuracion de TypeScript con el siguiente comando:

```bash
tsc --init
```

- y luego compilar el archivo con el siguiente comando:

```bash
tsc
```

## Tipos de datos en TypeScript

TypeScript tiene varios tipos de datos que puedes utilizar en tus programas. Algunos de los tipos de datos más comunes son:

- `number`: representa un número.
- `string`: representa una cadena de texto.
- `boolean`: representa un valor booleano (verdadero o falso).
- `any`: representa cualquier tipo de dato.
- `void`: representa la ausencia de tipo.
- `null`: representa un valor nulo.
- `undefined`: representa un valor indefinido.
- `object`: representa un objeto.
- `array`: representa un arreglo.
- `tuple`: representa una tupla.
- `never`: representa un tipo que nunca ocurre.
- `unknown`: representa un tipo desconocido.

Veamos un ejemplo de cómo se utilizan estos tipos de datos en TypeScript:

```typescript
let numero: number = 10;
let texto: string = "Hola, mundo";
let verdadero: boolean = true;
let cualquiera: any = "Cualquier cosa";
let nulo: null = null;
let indefinido: undefined = undefined;
let objeto: object = { nombre: "Juan", edad: 30 };
let arreglo: number[] = [1, 2, 3, 4, 5];
let tupla: [string, number] = ["Juan", 30];
let nunca: never = throw new Error("Error");
let desconocido: unknown = "Desconocido";
```

## Funciones en TypeScript

Las funciones en TypeScript son muy similares a las funciones en JavaScript. Puedes definir una función utilizando la palabra clave `function` seguida del nombre de la función y los parámetros que recibe. También puedes definir el tipo de dato que devuelve la función utilizando `: tipo`.

Veamos un ejemplo de cómo se define una función en TypeScript:

```typescript
function saludar(nombre: string): string {
    return "Hola, " + nombre;
}

console.log(saludar("Mundo"));
```

## Clases en TypeScript

Las clases en TypeScript son muy similares a las clases en otros lenguajes de programación orientados a objetos. Puedes definir una clase utilizando la palabra clave `class` seguida del nombre de la clase y las propiedades y métodos que contiene.

Veamos un ejemplo de cómo se define una clase en TypeScript:

```typescript

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

let juan = new Persona("Juan", 30);

console.log(juan.saludar());
```

## Definiendo nuestros propios tipos de datos con Interfaces y Type Aliases

En TypeScript puedes definir tus propios tipos de datos utilizando interfaces y type aliases. Las interfaces son una forma de definir la forma de un objeto, mientras que los type aliases son una forma de definir un tipo de dato con un nombre personalizado

Veamos un ejemplo de cómo se definen interfaces y type aliases en TypeScript:

```typescript
interface Persona {
    nombre: string;
    edad: number;
}

type Coordenadas = {
    x: number;
    y: number;
};

// o tambien se puede definir de la siguiente manera
type pointX = number;
type pointY = number;
type Coordenadas = {
    x: pointX;
    y: pointY;
};

let juan: Persona = { nombre: "Juan", edad: 30 };
let coordenadas: Coordenadas = [10, 20];
```





