# Proyecto final curso ReactJS de CoderHouse

El nombre del proyecto es Portyleria, que es el emprendimiento personal de pastelería de un amiga. Con lo cual el objetivo es que luego sea funcional y no sólo un proyecto de presentación.

## Funcionalidad

El proyecto cuenta con tres tabs en el nav bar: 
1- Nosotros: es la pantalla de inicio con info general (path="/").
2- Productos: ver descripción en el título siguiente (path="/products").
3- Contacto: por ahora simplement icónos para acceder a las formas de contacto (path="/contact").
4- Cart: El nav bar tiene un widget para acceso al shopping cart (path="/cart").

### Productos

Al ingresar a Productos tendremos el listado completo de productos ofrecidos en formato de cards.
Al clickear en cada producto iremos a su página respectiva (path="/item/:itemId") con información del producto y el contador para luego agregarlos al cart.
También tenemos la funcionalidad de filtrar por categoría (path="/products/:categoryId") a partir de una barra botonera dentro de Productos.

#### Cart

Por cada producto seleccionado, el usuario puede ver su carrito de compras. Desde aquí puede aumentar/reducir la cantidad de cada producto seleccionado (min 1 / max 5), eliminar un producto determinado del carrito o vaciar su carrito.
También tiene la opción de volver al listao de productos para seguir seleccionando elementos.
Por último un botón para "Ingresar Datos" que despliega como Toggle un formulario (Nombre, Email, Phone) para luego confirmar su compra.
Al confirmar la compra se abre un modal con un mensaje y el código de confirmación.