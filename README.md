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

- ## Configuración del archivo **[config.json](./src/data/config.example.json)**

> Opciones:

`ignoreBots`
- Por defecto: false
- Descripción: Haz que el bot ignore a los bots que tengan la presencia indicada (**false**, para que no se ejecute, **true** para que sí)
- No implementado: Ver [Versión 1.0.0](https://github.com/xTheSebaSx-afk/Bot-role-status/releases/tag/1.0.0)
- Tipo de argumento: **[Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean)**

`removeIfUserHasOffline`
- Por defecto: false
- Descripción: Remueve el rol si el usuario se encuentra **Desconectado** (**false**, para que no se ejecute, **true** para que sí)
- Tipo de argumento: **[Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean)**

`mustBeStrictlyTheSame`
- Por defecto: false
- Descripción: Se le agregará el rol al usuario si tiene el mismo estado indicado en la configuración (**false**, para que no se ejecute, **true** para que sí)
- Tipo de argumento: **[Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean)**

`executeWithCommand`
- Por defecto: false
- Descripción: Empieza a agregar los roles desde un comando (**false**, para que no se ejecute, **true** para que sí)
- No implementado: Ver [Versión 1.0.0](https://github.com/xTheSebaSx-afk/Bot-role-status/releases/tag/1.0.0)
- Tipo de argumento: **[Boolean](https://developer.mozilla.org/es/docs/Glossary/Boolean)**

> Datos:

`guild`
- Por defecto: ""
- Descripción: ID del servidor de donde se leerán los roles para ser añadidos
- Tipo de argumento: **[String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)** | **[Guild](https://discord.js.org/#/docs/main/main/class/Guild)**
- Ejemplo:
```json
{
  "guild": "12345678910111213145"
}
```

`roles`:
- Por defecto: []
- Descripción: Los roles que serán agregados, y la presencia necesaria para que sean agregados
- Tipo de argumento: **[Objeto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object) (Incluye **[String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String) | [Role](https://discord.js.org/#/docs/main/main/class/Role)**)**
- Ejemplo:
```json
{
  "roles": [{
    "rol": "12345678910111213145",
    "presence": "https://github.com"
  }]
}
```

`logs`
- Por defecto: { "enabled": false, "logs": "" }
- Descripción: Registro de los usuarios que serán agregados los roles
- Tipo de argumento: **[Objeto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object) (Incluye: **[Boolean](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)**)**
- No implementado: Ver [Versión 1.0.0](https://github.com/xTheSebaSx-afk/Bot-role-status/releases/tag/1.0.0)
- Ejemplo:
```json
{
  "logs": {
    "enabled": true,
    "logs": "12345678910111213145"
  }
}
```

> Código realizado por **[xTheSebaSx-afk](https://github.com/xTheSebaSx-afk/)** ©️ 2022
