<!-- PROJECT LOGO -->
<p align="center">
  <h1 align="center"><b>Framework de front-end para Fusion Energy</b></h1>
  <a href="https://serempre.com/es" align="center"><img alt="Serempre Logo" src="https://serempre.com/assets/img/logo.svg" align="center"/></a>


  <p align="center">
    <a href="https://gitlab.com/felipecastillo/frontend-template/-/tree/laravel-mix"><strong>Explora la documentación »</strong></a>
    <br />
    <br />
    <a href="https://gitlab.com/felipecastillo/frontend-template/-/issues">Reporta un error</a>
    ·
    <a href="https://gitlab.com/felipecastillo/frontend-template/-/issues">Solicita una nueva funcionalidad</a>
  </p>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

### Tabla de contenido
- [Requerimientos mínimos del sistema](#requerimientos-mínimos-del-sistema)
- [Sobre el proyecto](#sobre-el-proyecto)
  - [Configuración](#configuración)
    - [Instalación manual](#instalación-manual)
  - [Para producción](#para-producción)
  - [Rutas de desarrollo](#rutas-de-desarrollo)
  - [Construido con las siguientes tecnologías](#construido-con-las-siguientes-tecnologías)
    - [Plugins](#plugins)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [License](#license)
- [Colaboradores](#colaboradores)

## Requerimientos mínimos del sistema

- [Node.js 12.22](https://nodejs.org/en/) o una versión superior
- [npm 6.0.49](https://www.npmjs.com/)  o una versión superior
- OsX, Windows (including WSL), y Linux están soportados
``` txt
NOTA:
Puedes usar nvm para trabajar con la versión de Nodejs utilizada en el desarrollo de este proyecto
```

## Sobre el proyecto

Este framework te brinda la mejor experiencia para desarrollar una aplicación en conjunto con Drupal y lista para desplegar en producción.


### Configuración

> 🏗 La mayoría de la configuración tiene los valores por defecto.

#### Instalación manual

1. Copia todos los archivos de este framework en la raíz de tu proyecto de Drupal alojado en `themes` (algunos desarrollos realizados en la carpeta `module`). Ejemplo: `nombre-del-proyecto/themes/custom/nombre-del-tema` (si el desarrollo es en el módulo, `nombre-del-proyecto/modules/custom/nombre-del-modulo`)

   > ⚠️ Si el destino de tus archivos ya tiene la carpeta `templates` no la sobreescribas.

2. Importa los archivos de estilos y scripts en `nombre_del_tema.libraries.yml`

   ```yml
    // nombre_del_tema.libraries.yml
    //...
    app: // Normalmente acá va el nombre de la librería, preferiblemente no cambiar.
      js:
        dist/js/main.bundle.js: { attributes: { preload: true }, preprocess: false, minified: true }
      css:
        component:
          dist/css/main.css: { attributes: { preload: true }, preprocess: false, minified: true }
    ```

   > ⚙️ Inmediatamente después vacía caché en Drupal.

3. Ajusta la configuración del servidor de webpack en `webpack.mix.js`:

    ```javascript
    // webpack.mix.js
      // ...
      const proxy = 'https://front-framework.dd:8443/' || null; // Url del ambiente local
      // ...
    ```

4. Configura las siguientes rutas en `webpack.mix.js`:

   ```javascript
    // webpack.settings.js
    //...
    mix
          // Scripts
          .ts('sources/ts/index.ts', 'js/main.bundle.js')  /* minify your TS scripts */
        // ...
        // Styles
        .postCss('sources/css/main.css', 'css/main.css', [
          //...
        ])
        // Set the public path to the dist folder
        .setPublicPath('dist')
        // ...
   ```

   > ℹ️ Valores manejados por defecto.

   En este proyecto, para realizar librerías para cada componente de drupal creado, puedes duplicar las lineas anteriores en el archivo de configuración para laravel-mix, por ejemplo
    ```javascript
    // webpack.settings.js
    //...
    mix
          // Scripts
          .ts('sources/ts/index.ts', 'js/main.bundle.js')  /* minify your TS scripts */
        // ...
        // Styles
        .postCss('sources/css/main.css', 'css/main.css', [
          //...
        ])
          // Scripts for dummy example
          .ts('sources/ts/components/dummy.ts', 'js/components/dummy.bundle.js')  /* minify your TS scripts */
        // ...
        // Styles
        .postCss('sources/css/main.css', 'css/main.css', [
          //...
        ])
        // Set the public path to the dist folder
        .setPublicPath('dist')
        // ...
   ```


5. Instala las dependencias del proyecto.
  - ##### Por terminal o consola
    Ve a la ruta del proyecto y ejecuta el siguiente comando en `nombre-del-proyecto/themes/custom/nombre-del-tema`:
     ```sh
     npm install
     ```
  - ##### Si usas alguna herramienta de Jet Brains (WebStorm, PhpStorm, PyCharm):
    Click derecho en `package.json` y luego en `run npm install`.

6. Por último en el mismo directorio, ejecuta el comando para desarrollo:

   ```sh
   npm run dev
   ```

   O si deseas iniciar un servidor de desarrollo ejecuta el comando del watcher:
   ```sh
    npm run dev:watch
   ```

   > 🚀 webpack iniciará un servidor de desarrollo en `http://localhost:3000`.\
   > Visítalo para ver tu aplicación

   Los siguientes scripts se refieren a las diferentes etapas de desarrollo de la aplicación:

  - `dev` - Corre dev el cuál inicia el modo de desarrollo
  - `dev:watch` - Corre dev el cuál inicia el modo de desarrollo en un servidor local
  - `prod` - Corre prod el cuál construye la aplicación para uso en producción.
  - `phoenix` - Corre phoenix para volver a construir tu proyecto nuevamente en caso de fallas con dependencias(unicamente para usuarios con sistemas basados en UNIX(WSL, Linux, OsX))

### Para producción
Ejecuta el comando de producción antes de hacer `commit` o `pull`:

   ```sh
   npm run prod
   ```
### Rutas de desarrollo
### Construido con las siguientes tecnologías

- [Laravel-Mix](https://laravel-mix.com/)
- [PostCSS](https://postcss.org)
- [ESLint](https://eslint.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org/)
#### Plugins
1. [Splide](https://splidejs.com/): Instalada via [npm](https://www.npmjs.com/package/@splidejs/splide) para realizar carousels.

<a href="https://splidejs.com/" align="center"><img alt="Splide logo" src="https://raw.githubusercontent.com/Splidejs/splide/HEAD/images/logo.svg" align="center"  height="150"/></a>





## License

Distributed under the MIT License. See [LICENSE](https://gitlab.com/felipecastillo/frontend-template/blob/master/LICENSE) for more information.

## Colaboradores

- Felipe Castillo <fcastillo@serempre.com>
- Emmanuel Garnica Perez <egarnica@serempre.com>
