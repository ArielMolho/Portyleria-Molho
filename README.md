# Proyecto final curso ReactJS de CoderHouse

El nombre del proyecto es Portyleria, que es el emprendimiento personal de pastelería de un amiga. Con lo cual el objetivo es que luego sea funcional y no sólo un proyecto de presentación.

## Funcionalidad

El proyecto cuenta con tres tabs en el nav bar: 
1- Nosotros: es la pantalla de inicio con info general (path="/").
2- Productos: ver descripción en el título siguiente (path="/products").
3- Contacto: por ahora simplement icónos para acceder a las formas de contacto (path="/contact").

Además el nav bar tiene widget para acceso al shopping cart que por el momento no tiene contenido (path="/cart").

### Productos

Al ingresar a Productos tendremos el listado completo de productos ofrecidos en formato de cards.
Al clickear en cada producto iremos a su página respectiva (path="/item/:itemId") con información del producto y el contador para luego agregarlos al cart (todavía no es funcional, sólo dá un console.log)
También tenemos la funcionalidad de filtrar por categoría (path="/products/:categoryId") a partir de una barra botonera dentro de Productos