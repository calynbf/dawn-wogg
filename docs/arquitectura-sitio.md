# Arquitectura del nuevo sitio WOGG

## Dirección

El nuevo sitio se construye sobre Shopify Dawn 16.0.0.

- Identidad visual: mantener el estilo vigente de WOGG.
- Arquitectura y experiencia comercial: tomar como referencia la estructura de Drink SUMA.
- Regla: adaptar patrones y funcionalidades; no copiar textos, imágenes ni identidad visual de SUMA.
- Objetivo principal: ayudar a elegir alimento para perros o gatos y llevar al usuario a la compra con la menor fricción posible.

## Navegación principal

1. Comprar
   - Perros
   - Gatos
   - Todos los productos
2. Calculá su ración
3. Beneficios
4. Ingredientes
5. Nuestra historia
6. Preguntas frecuentes
7. Dónde encontrarnos

Acciones persistentes: búsqueda, cuenta y carrito.

## Barra de anuncios

Carrusel editable desde Shopify con hasta tres mensajes:

- Beneficio o umbral de envío.
- Propósito social de WOGG.
- Promoción, novedad o suscripción.

Cada mensaje puede tener enlace y activarse o desactivarse desde el editor del tema.

## Página de inicio

### 1. Hero

- Fotografía o video propio de WOGG.
- Promesa principal de alimentación natural para perros y gatos.
- Texto breve de respaldo profesional.
- CTA principal: `Comprar ahora`.
- CTA secundario: `Calcular ración`.
- Indicador de confianza: cantidad de peludos felices o aprobación profesional.

### 2. Beneficios rápidos

Banda animada o carrusel con mensajes como:

- Aprobado por veterinarios.
- Sin harinas.
- Ingredientes naturales.
- Sin conservantes.
- Alimento congelado BARF.

### 3. Acceso por mascota

Dos tarjetas visuales grandes:

- Perros.
- Gatos.

Cada tarjeta enlaza a su colección correspondiente.

### 4. Productos más vendidos

Carrusel alimentado por una colección seleccionable desde Shopify. Debe incluir compra rápida, variantes, precio, disponibilidad y etiquetas comerciales.

### 5. Propuesta de valor

Bloque educativo sobre los efectos de una alimentación natural, con beneficios escaneables y CTA hacia la calculadora de ración.

### 6. Ingredientes

Galería o carrusel con imagen, nombre y descripción corta de cada ingrediente. Los elementos deben ser bloques administrables desde el editor del tema.

### 7. Comparación educativa

Comparación clara entre WOGG/BARF y alimento ultraprocesado. Los criterios deben poder editarse sin tocar código.

### 8. Propósito y garantía

- Garantía de plato limpio.
- Aporte de cada compra al propósito social de WOGG.
- CTA de prueba o compra.

### 9. Cómo comenzar

Proceso en tres pasos:

1. Elegir el menú.
2. Comprar en línea.
3. Recibir el pedido.

Debe incluir CTA a la calculadora de ración.

### 10. Comunidad y prueba social

- Testimonios o reseñas.
- Contenido social/Instagram.
- Cifras de confianza.
- Fotografías reales de clientes y mascotas.

### 11. Dónde encontrarnos

CTA hacia puntos de venta o cobertura de entrega. Preparado para integrar un localizador de tiendas si se define una aplicación.

### 12. Preguntas frecuentes

Acordeones administrables. En la portada se muestran las preguntas principales y se enlaza a una página completa de preguntas frecuentes.

### 13. Newsletter y pie de página

- Incentivo de primera compra.
- Consentimiento de privacidad.
- Navegación agrupada en Tienda, Aprendé y Ayuda.
- Redes sociales, políticas, medios de pago y datos legales.

## Carrito

Usar carrito lateral para mantener al usuario en la página. Debe contemplar:

- Edición de cantidades y eliminación.
- Progreso hacia envío gratis, si corresponde.
- Productos recomendados configurables.
- Campo de notas cuando sea necesario.
- CTA claro al checkout.

## Página de producto

- Galería rica en fotografías o video.
- Selector de variantes y presentación.
- Precio, disponibilidad y compra rápida.
- Información de envío y conservación.
- Beneficios principales.
- Ingredientes y composición.
- Cantidad recomendada y acceso a la calculadora.
- Instrucciones de transición, descongelado y conservación.
- Preguntas frecuentes del producto.
- Reseñas y productos relacionados.

## Páginas y plantillas requeridas

- Inicio.
- Colección Perros.
- Colección Gatos.
- Producto.
- Calculadora de ración.
- Beneficios / alimentación BARF.
- Ingredientes.
- Nuestra historia.
- Preguntas frecuentes.
- Dónde encontrarnos / zonas de envío.
- Contacto.
- Mayoristas.
- Blog y artículo.
- Carrito, búsqueda, cuenta y páginas legales.

## Configuración técnica

- Todos los componentes nuevos deben ser secciones o bloques configurables en el editor de Shopify.
- Evitar textos, enlaces o identificadores de productos escritos directamente en Liquid.
- Usar fuentes, colores y radios mediante los ajustes globales del tema.
- Mantener compatibilidad móvil, accesibilidad por teclado y carga diferida de imágenes.
- Aprovechar productos, colecciones, menús, metaobjetos y metacampos de Shopify antes de introducir aplicaciones.

## Orden de implementación

1. Fundamentos visuales de WOGG: colores, tipografías, botones, iconografía y espaciado.
2. Encabezado, anuncios, navegación, carrito lateral y pie de página.
3. Secciones configurables de la página de inicio.
4. Colecciones y tarjetas de producto.
5. Página de producto.
6. Calculadora de ración.
7. Páginas editoriales, preguntas frecuentes y localizador.
8. Revisión móvil, rendimiento, accesibilidad y Theme Check.
