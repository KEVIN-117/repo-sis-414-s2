# Como Crear un Pull Request
## ¿Qué es un Pull Request?
Un Pull Request es una petición que se hace a un repositorio para que se incluyan cambios que se han hecho en un repositorio forkeado. Es decir, si tienes un repositorio en tu cuenta de GitHub y haces cambios en él, puedes hacer un Pull Request a la cuenta original para que se incluyan tus cambios en el repositorio original.

## Pasos para hacer un Pull Request

1. **Hacer un Fork del repositorio original**: Para hacer un Pull Request, primero debes hacer un Fork del repositorio original. Para hacer esto, ve al repositorio original y haz clic en el botón Fork en la esquina superior derecha de la página. Esto creará una copia del repositorio en tu cuenta de GitHub.
![img_1.png](GitGitHub/img_1.png)
- si has hecho click en el botón Fork, verás una pantalla como la siguiente:
![img_2.png](GitGitHub/img_2.png)
- si has hecho click en el botón crear Fork, verás una pantalla como la siguiente:
![img_3.png](GitGitHub/img_3.png)
- si todo ha ido bien, verás una pantalla como la imagen anterior, eso indica que hahora tienes una copia del repositorio en tu cuenta de GitHub, en donde podrás hacer los cambios que desees para luego hacer un Pull Request.

2. **Clonar el repositorio forkeado**: Una vez que hayas hecho un Fork del repositorio original, debes clonar el repositorio forkeado en tu máquina local. Para hacer esto, copia la URL del repositorio forkeado y ejecuta el siguiente comando en tu terminal:
```bash
git clone <URL del repositorio forkeado>
```
- para copiar la URL del repositorio forkeado, ve a tu cuenta de GitHub, abre el repositorio forkeado y haz click en el botón Code. Esto mostrará la URL del repositorio, que puedes copiar haciendo clic en el botón de copiar.
![img_4.png](GitGitHub/img_4.png)
- si todo ha ido bien al ejecutar el comando anterior, verás una copia del repositorio en tu máquina local, en donde podrás hacer los cambios que desees para luego hacer un commit a tu repositorio forkeado.
- para subir los cambios a tu repositorio forkeado, ejecuta los siguientes comandos en tu terminal:
```bash
git add .
git commit -m "Mensaje del commit"
git push origin main
```

3. **Hacer un Pull Request**: Una vez que hayas hecho los cambios en tu repositorio forkeado, puedes hacer un Pull Request al repositorio original. Para hacer esto, ve a tu repositorio forkeado en GitHub y haz clic en el botón Pull Request. Esto te llevará a una página donde puedes revisar los cambios que has hecho y crear un Pull Request.
![img_5.png](GitGitHub/img_5.png)
- si has hecho click en el botón Pull Request, verás una pantalla como la siguiente:
![img_6.png](GitGitHub/img_6.png)
- ahora si todo ha ido bien debes hacer click en el botón Create Pull Request, verás una pantalla como la siguiente:
![img_7.png](GitGitHub/img_7.png)
- si todo ha ido bien, verás una pantalla como la imagen anterior, en donde podras visualizar todos los cambios que has hecho.
![img_9.png](GitGitHub/img_9.png)
- si todo ha ido bien, verás una pantalla como la imagen anterior, en donde podrás visualizar todos los cambios que has hecho y hacer click en el botón Create Pull Request, para ver una pantalla como la siguiente:
![img_10.png](GitGitHub/img_10.png)
- si todo ha ido bien, verás una pantalla como la imagen anterior, en donde podrás escribir un mensaje para el Pull Request y hacer click en el botón Create Pull Request, para ver una pantalla como la siguiente:
![img_11.png](GitGitHub/img_11.png)
- si todo ha ido bien, verás una pantalla como la imagen anterior, en donde podrás visualizar el Pull Request que has hecho y esperar a que el dueño del repositorio original lo revise y lo acepte.
- el dueño del repositorio original recibirá una notificación de que has hecho un Pull Request y podrá revisar los cambios que has hecho y aceptarlos o rechazarlos.
- el propietario del repositorio original tendra la siguiente pantalla:
![img_12.png](GitGitHub/img_12.png)
- dentro del Pull Request, el propietario del repositorio original podrá ver los cambios que has hecho y hacer comentarios sobre ellos.
![img_13.png](GitGitHub/img_13.png)
- el propietario podra ver el titulo del Pull Request, los archivos que has modificado, los cambios que has hecho y los comentarios que has hecho.
- si el propietario del repositorio original acepta los cambios que has hecho, los cambios se incluirán en el repositorio original y se cerrará el Pull Request.

## Conclusión
Hacer un Pull Request es una forma de contribuir a un proyecto de código abierto y colaborar con otros desarrolladores. Al hacer un Pull Request, puedes compartir tus cambios con la comunidad y mejorar el proyecto para todos. Espero que esta guía te haya sido útil y te haya ayudado a entender cómo hacer un Pull Request en GitHub.

## Referencias
- [GitHub Docs](https://docs.github.com/es/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
- [Atlassian](https://www.atlassian.com/git/tutorials/making-a-pull-request)
- [Git](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project)