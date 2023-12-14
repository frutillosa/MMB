## REDISEÑO DE MONTEVIDEO MUSIC BOX - Node.js, MongoDB, Express
A continuación se detallan las instrucciones para poder ejecutar este documento correctamente.

## Requisitos mínimos
Se debe tener instalado Node.js en el sistema.
Lo que se recomienda es:
* VSCode como editor de texto.
* Instalar GIT, de manera de tener acceso a la terminal bash.
* Utilizar Postman para testear

## Inicialización
Abrir una nueva terminal (elegir bash, no powershell). Asegurarse de que la ubicación que muestre sea la que contiene el archivo JS que queremos ejecutar.
Se inicializa utilizando los siguientes comandos:
```
npm install (para instalar todas las dependencias)
```

```
cd nombre_directorio (carpeta donde se tiene el package.json)
```

Estando en el directorio correcto, ejecutar el siguiente comando:
```
node index.js
```

Siendo `index.js` el nombre de nuestro archivo principal o punto de entrada.
Debería de mostrarse en la terminal el siguiente mensaje:
```
Server corriendo en el 3000!
Conexión exitosa a la base de datos
```

El servidor ya está corriendo y listo para recibir requests. Puedes utilizar Postman para "golpear" los distintos endpoints disponibles en el servicio. La url raíz es `http://localhost:3000`

## Endpoints disponibles

* POST /addNewEvento
* GET /listEventos
* DELETE /deleteEvento
* GET /generarCodigoQR
* POST /send-email