# Node JS - Apuntes

## ¿Qué es Node.js?

Cotando con una gran cantidad de tecnologias y herrammientas para el desarrollo de aplicaciones web. Node.js es una de las tecnologias más populares para el desarrollo de aplicaciones web del lado del servidor. 

Por defecto javascript solo tiene la capacidad de ejecutarse en el cliente, es decir solo en el navegador. Node.js le permite a javascript salir del navegador y ejecutarse en el servidor.


- Para seguir aprendiendo sobre Node.js es necesario que conoscas los modulos de Node.js, los cuales son una de las características más importantes de Node.js. Si no lo conoces te recomiendo que leas el siguiente [modulos](./MODULOS_ES.md)


## ¿Por qué Node.js?

- **Velocidad**: Node.js es construido sobre el motor de JavaScript V8 de Google Chrome, el cual es extremadamente rápido en la ejecución de código.
- **Escalabilidad**: Node.js es escalable, lo que significa que puede manejar una gran cantidad de conexiones simultáneas.
- **No bloqueante**: Node.js usa un modelo de entrada/salida sin bloqueo, lo que lo hace ligero y eficiente.

## ¿Cómo instalar Node.js?

Para instalar Node.js en tu computadora, sigue los siguientes pasos:

1. Ve a la página oficial de [Node.js](https://nodejs.org/).
2. Descarga la versión que desees, pero yo te recomiendo descargar la versión LTS.
3. Ejecuta el instalador y sigue los pasos que te indica.
4. Para verificar que Node.js se instaló correctamente, abre la terminal y escribe el siguiente comando:

```bash
node -v
```

Si ves la versión de Node.js que instalaste, entonces todo salió bien.

## ¿Cómo ejecutar un archivo de Node.js?

Para ejecutar un archivo de Node.js, sigue los siguientes pasos:

1. Crea un archivo con extensión `.js`.
2. Escribe el código que desees.
3. Abre la terminal y navega hasta la ubicación del archivo.
4. Escribe el siguiente comando:

```bash
node nombre_del_archivo.js
```

Si todo salió bien, verás el resultado del archivo en la terminal.

## ¿Qué es npm?

Npm es el sistema de gestión de paquetes de Node.js. Es el sistema más grande de gestión de paquetes de software del mundo. Con npm puedes instalar paquetes de Node.js, gestionar dependencias, ejecutar scripts y mucho más.

Existen mas manejadores de paquetes como yarn, pero npm es el más popular y es el que tiene por defecto Node.js.

## ¿Cómo instalar un paquete de Node.js?

Para instalar un paquete de Node.js, sigue los siguientes pasos:

1. Abre la terminal.
2. Navega hasta la ubicación de tu proyecto.
3. Escribe el siguiente comando:

```bash
npm install nombre_del_paquete
```

Si todo salió bien, el paquete se instalará en tu proyecto.


# Referencias

Si quieres profundizar más en Node.js, te recomiendo leer:

- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)
- [Mastering NodeJS: A Comprehensive Guide to Node Js REPL Lesson - 1](https://blogsbymayank.hashnode.dev/mastering-nodejs-a-comprehensive-guide-to-node-js-repl-lesson-1)
- [30 days of Node](https://nodejsera.com/30-days-of-node.html)