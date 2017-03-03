# Router API Documentation

Un objeto router es una instancia aislada de los middleware y las rutas. Se puede pensar en él como una "mini-aplicación" sólo capaz de realizar funciones de middleware y de enrutamiento. Cada aplicación Express tiene un aplicación router incorporada.

Un router se comporta como middleware en sí, por lo que se puede utilizar como argumento para app.use \(\) o como el argumento de otro método use\(\).

El mas alto nivel del objeto express tiene un método router \(\) que crea un nuevo objeto router.

Una vez que haya creado un objeto router, se puede añadir middleware y el método HTTP routes \(por ejemplo get, put, post, etc.\) al igual que una aplicación.

## Métodos

#### router.all\(path, \[callback, ...\] callback\)

Este método es muy útil para el mapeo lógico "global" para los prefijos de ruta específicas. Por ejemplo, si se coloca la siguiente ruta en la parte superior de todas las otras definiciones de ruta, se requeriría que todas las rutas desde ese punto requieran autenticación y cargar automáticamente un usuario. Tenga en cuenta que estas devoluciones de llamada no tienen que actuar como puntos finales; loadUser puede realizar una tarea, a continuación, llamar a next\(\) par continuar la búsqueda de rutas posteriores.

![](/assets/Sin%20título1.png)

#### router.METHOD\(path, \[callback, ...\] callback\)

Los métodos router.METHOD\(\) proporcionan la funcionalidad de enrutamiento en Express, donde METHOD es uno de los métodos HTTP, como GET, PUT, POST, y así sucesivamente, en minúsculas. Por lo tanto, los métodos actuales son router.get\(\), router.post\(\), router.put\(\), y así sucesivamente.

Puede proporcionar múltiples servicios repetidos, y todos son tratados por igual, y se comportan igual que el middleware, excepto que estas devoluciones de llamada pueden invocar next\('route'\) para eludir la devolución de llamada. Puede utilizar este mecanismo para llevar a cabo precondiciones en una ruta al pasar el control a rutas posteriores, cuando no hay ninguna razón para continuar con la ruta buscada.

#### router.param\(name, callback\)

Agrega devolución de llamada activa a parámetros de la ruta, donde name es el nombre del parámetro y callback la función de devolución de llamada.

Los parámetros de la función de devolución de llamada son:

* req: la solicitud de objeto.
* res: el objeto respuesta.
* next: lo que indica la siguiente función de middleware.
* El valor del parámetro name.
* El nombre del parámetro.



#### router.route\(path\)

Devuelve una instancia de una sola ruta que luego se puede utilizar para manejar los elementos HTTP con el middleware opcional. Utilizar router.route\(\) para evitar la nomenclatura ruta duplicada y por lo tanto los errores de escritura.



#### router.use\(\[path\], \[function, ...\] function\)

Utiliza la función middleware especificada, con la ruta de montaje opcional path, que por defecto es "/".

Este método es similar a app.use\(\).



