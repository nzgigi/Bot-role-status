# Bot Role Status

Agrega o remueve roles dependiendo de la presencia de un usuario

- ## Información Básica

Con este código podrás agregarle roles a tus usuarios dependiendo de las presencias que tengan.

Podrás configurar que roles quieres que sean agregados, y que presencias quieres que el bot lea para que este sea agregado (Configurar en [config.json](./src/data/config.example.json))

Bot creado con **[NodeJS](https://nodejs.org)** y **[Discord.js](https://discord.js.org/) (Última versión)**

![https://discord.js.org](https://img.shields.io/npm/v/discord.js?label=discord.js)
![https://nodejs.org](https://img.shields.io/badge/nodejs-17.8.0-green)

- ## Modo de uso

Rellenar los campos del archivo [.env](./.env.example) (Primero remover la extensión **.example**) y [config.json](./src/data/config.example.json)

Ejecutar en la consola el comando `npm start` para arrancar el bot

- ## Función en bot

Indicar en qué canal quieres que se envié el registro cuando se le agregue a los usuarios los roles correspondientes (Opcional)

Si en la configuración del bot, la opción `executeWithCommand` es **true**, ejecutar el comando ´!start-role´ para que el bot empiece ha agregar los roles a los usuarios

> Nota:
Si tu servidor incluye algún sistema de **antiraid**, agregar al bot en la lista de ignorados, ya que esos bots pueden detectar que el bot está intentando hacer una raid

> Código realizado por **[xTheSebaSx-afk](https://github.com/xTheSebaSx-afk/)** ©️ 2022