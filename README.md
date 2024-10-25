# Prototipo de caso real para Arca-Continental

## Descripción

Este proyecto propone una solución a la problemática presentada por Arca-Continental a los estudiantes del grupo Deadpool de Kruger School. La solución integra análisis de datos avanzados para optimizar la toma de decisiones en las áreas comercial y logística de Arca-Continental, contribuyendo a mejorar la eficiencia operativa y estratégica de estas áreas clave.

A través del uso de tecnologías de última generación como Power Bi, Javascript, Node, WebPush y técnicas de análisis de datos, el proyecto permite a la empresa identificar patrones, prever tendencias y agilizar la gestión de sus recursos y procesos logísticos. La solución ha sido diseñada para ser intuitiva y adaptable, facilitando su integración en el entorno empresarial de Arca-Continental.

## Instalación

**1. Requisitos previos:**
Asegúrate de tener instalado Node.js en tu sistema, en la versión 20 o superior. Puedes verificar tu versión actual de Node ejecutando el siguiente comando en la terminal:
```sh
node -v
```
Si necesitas instalar o actualizar Node.js, puedes descargar la última versión desde nodejs.org.

**2. Instalación del Proyecto:**

* Clona el repositorio o descarga el proyecto en tu máquina.

* Navega a la raíz del proyecto en tu terminal.

**3. Ejecutar el Proyecto:**
Una vez en la raíz del proyecto, ejecuta el siguiente comando:

```sh
node ./src/index.js
```
## Uso

### Inicio
1. Asegúrate de haber iniciado el proyecto siguiendo los pasos de **Instalación**.
2. Una vez iniciado, abre tu navegador y accede a [http://localhost:3000/index.html](http://localhost:3000/index.html).

### Inicio de Sesión
1. Haz clic en el botón **"Login"** en la esquina superior derecha de la página de inicio. Serás redirigido a la página de inicio de sesión.

2. Para iniciar sesión, puedes probar con los siguientes usuarios de ejemplo:

    * Usuario de Logística

        * **Correo:** userlogistica@arcacontinental.com
        * **Contraseña:** logistica
      
        Este usuario tiene permisos para visualizar datos específicos del área de logística.

    * Usuario Comercial

        * **Correo:** usercomercial@arcacontinental.com
        * **Contraseña:** usercomercial
      
        Este usuario tiene permisos para visualizar datos relevantes al área comercial.

### Cerrar Sesión
Para cerrar sesión, con un usuario activo:

1. Dirígete a la esquina superior derecha de la página.
2. Haz clic en el botón **"Logout"**. Serás redirigido a la página de inicio.


## Tecnologias Utilizadas

### Herramientas
1. **Power Bi** - Para análisis de datos y visualización.
2. **Excel** - Gestión y limpieza de datos.
3. **JavaScript (ECMAScript 6)** -  Desarrollo de la lógica del frontend y backend.
4. **HTML 5** - Estructura del contenido del sitio.
5. **CSS 3** - Estilización y diseño del sitio web.

### Complementos y Librerias
1. **Power Bi Service** -  Servicio de Power BI para compartir y publicar informes.
2. **Node.js 20** -  Entorno de ejecución para JavaScript en el backend.
3. **Dotenv 16** - Gestión de variables de entorno para la configuración segura.
4. **Express 4** - Framework de Node.js para crear el servidor y manejar rutas.
5. **Morgan 1** - Middleware para registrar solicitudes HTTP en el servidor.
6. **Web-Push 3** - Implementación de notificaciones push en el navegador.
7. **XLSX** - Manejo de archivos Excel para el procesamiento y análisis de datos.

## Colaboradores

* Andrea Alvear
* Omar Valencia
* Carlos Delgado
* Marcos Plata Barahona
* Cristian Armijos
* Lucia Rojas
