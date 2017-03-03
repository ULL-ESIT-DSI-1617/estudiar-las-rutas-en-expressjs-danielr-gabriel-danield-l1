# Basic Routing

Se refiere a cómo una aplicación responde a una solicitud de cliente a otro extremo determinado.

Cada ruta puede tener una o más funciones del manejador.

Cada ruta adopta la siguiente estructura:

![](/assets/estructura.png)

Donde:

* app es una instancia de express.
* METHOD es un método de solicitud http.
* PATH es una ruta de acceso en el servidor.
* HANDLER es la función que se ejecuta cuando se compara la ruta.

Hay diferentes métodos, los más utilizados son los siguientes:

* GET
* POST
* PUT
* DELETE

Un ejemplo de uno de ellos es:

![](/assets/ejemplo.png)

