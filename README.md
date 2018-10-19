# Projecto Hoteles Prueba

El projecto costa de 2 partes un backend y un app front.

El backend fue realizado en Express con Arquitectura MVC usando algunas depedencias como Mongoose.

El Front es una app desarrollada en react native,  la aplicación fue desarrollada usando Expo que es un framework de desarrollo de React Native, el patrón de redux, para la navegación se uso react-navigation.

# Resultado

![](test.gif)

# Instrucciones

Para instalar el proyecto debemos ingresar a la terminar y primero se debe clonar el repositorio.

`$ git clone git@github.com:juanpaternina/hotelAlMundo.git `

Una vez clonado el proyecto ingresas a la carpeta api e instalamos las dependencias con tu gestor de paquetes favorito

`$ yarn install` o `$ npm install`

Luego ingresamos a la carpeta hotel e instalamos las dependencias.

`$ yarn install` o `$ npm install`

Una vez nuestras dependencias hayan sido instaladas  procedemos a iniciar al servidor ingresamos a la carpeta api e iniciamos express.

`$ yarn start`  o `$ npm start`

Luego abrimos una pestaña nueva y vamos a la carpeta hotels editamos la dirección del api y la apuntamos a nuestra ip local, el archivo a editar se encuentra en la siguiente ruta 

/hotels/app/api/index.js

Linea 2, reemplaza por la dirección de tu maquina conservando el mismo puerto --> 'tudireccioniplocal:3000'

Luego regresamos a la terminal en una pestaña nueva e iniciamos la aplicación nuevamente 
`$ yarn start`  o `$ npm start`

Una vez lo hayas hecho procedemos a entrar al [google play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_CO) o appstore e instalamos la app de pruebas de Expo Framework

Una vez decargada abrimos la aplicación y le damos en **Scan QR code**

Y ahí nos abrirá la aplicación corriendo en nuestro entorno local.

Adjunto Gif App funcionando y consultando la BD

