# Middleware

Express es una infraestructura web de direccionamiento y middleware que tiene una funcionalidad mínima propia: una aplicación Express es fundamentalmente una serie de llamadas a funciones de middleware.

Las funciones de \_middleware \_son funciones que tienen acceso al objeto de solicitud \(req\), al objeto de respuesta \(res\) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación \(next\).

Las funciones del middleware pueden:

* Ejecutar cualquier código.

* Realizar cambios en la solicitud y los objetos de respuesta.

* Finalizar el ciclo de solicitud/respuestas.

* Invocar la siguiente función de middleware en la pila.

Si la función de middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar next\(\) para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará colgada.

Una aplicación Express puede utilizar los siguientes tipos de middleware:

* Middleware de nivel de aplicación
* Middleware de nivel de direccionador
* Middleware de manejo de errores
* Middleware incorporado
* Middleware de terceros

### Middleware de nivel de aplicación

Se enlaza el middleware de nivel de aplicación a una instancia del objeto de aplicación utilizando las funciones app.use\(\) y app.METHOD\(\), donde METHOD es el método HTTP de la solicitud que maneja la función de middleware \(por ejemplo, GET, PUT o POST\) en minúsculas.

Este ejemplo muestra una ruta y su función de manejador \(sistema de middleware\). La función maneja las solicitudes GET a la vía de acceso /user/:id.

![](/assets/ejemplo14.png)

### Middleware de nivel de direccionador

El middleware de nivel de direccionador funciona de la misma manera que el middleware de nivel de aplicación, excepto que está enlazado a una instancia de express.Router\(\).

### Middleware de manejo de errores

El middleware de manejo de errores siempre utiliza cuatro argumentos. Debe proporcionar cuatro argumentos para identificarlo como una función de middleware de manejo de errores. Aunque no necesite utilizar el objeto next, debe especificarlo para mantener la firma. De lo contrario, el objeto next se interpretará como middleware normal y no podrá manejar errores.

![](/assets/ejemplo15.png)

### Middleware incorporado

La única función de middleware incorporado en Express es express.static. Esta función es responsable del servicio de activos estáticos de una aplicación Express.

A continuación, se muestra un ejemplo de uso de la función de middleware  express.static con un objeto de opciones elaboradas:

![](/assets/ejemplo16.png)

Puede tener más de un directorio estático para cada aplicación.

### Middleware de terceros

Para usar los middleware de terceros debemos intalarlar su modulo Node.js y cargarlo en la aplicación a nivel de aplicación o a nivel de direccionador.







