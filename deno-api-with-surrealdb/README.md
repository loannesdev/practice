## **Requisitos para ejecutar este proyecto**
> **Nota: La información del sitio web de SurrealDB está en inglés.**

- Instalar Deno (por lo menos desde la versión 1.35.0 hacia adelante).
- Instalar surrealDB `1.0.0-beta.9+20230402` o superior para su respectivo sistema operativo cómo se indica en su [sitio web oficial](https://surrealdb.com/docs/installation).  
- Clonar este repositorio de manera local en tu equipo.
- Tener un cliente http para probar los endpoints.

## **Pasos para iniciar la base de datos y la API**
1. Inicia la base de datos ejecutando el comando: `surreal.exe start --user root --pass root memory` (este es el comando para Windows, si tienes otro sistema operativo puedes consultarlo en este [link](https://surrealdb.com/docs/cli/start) para tener más información).
2. Dirigete a la carpeta raiz del proyecto / repositorio clonado, si no estás en un editor de código que tenga integrada la consola, accede a la carpeta desde la consola de preferencia y ejecuta el comando de deno `deno task start` para iniciar la api.

    > **Nota: Si la base de datos se encuentra vacía al iniciar la api, esta va a agregar un registro a la tabla video_game**

<br>

# Características del sistema

Esta api se realizó con deno en su versión [1.35.0](https://deno.land/manual@v1.35.0/introduction) con las librerías:  
- [Oak - 12.6.0](https://deno.land/x/oak@v12.6.0)
- [Surrealdb.js - 0.8.2](https://deno.land/x/surrealdb@v0.8.2)

<br>

## ***End points***
*Los parámetros enviados deben ser por el body de la petición cuando estés usando tu cliente http*.

<br>

| URl | Método | Parámetros esperados |
| - | - | - |
| / | GET | No aplica |
| / | POST | `{ name, launch_date, price, creator, supported_languages, genres }` |
| / | PUT | `{ id, name (opcional), launch_date (opcional), price (opcional), creator (opcional), supported_languages (opcional), genres (opcional) }` |
| / | DELETE | `{ id }` |

**Nota: Para más detalles vea la sección de [datos de prueba](#datos-de-prueba).**

<br>

## ***Base de datos***

### Nombre de bd
> **games_db**

### Tablas
>#### **video_game**
> - id
> - name
> - launch_date
> - price
> - creator
> - supported_languages
> - genres

<br>

## ***Código (en SurrealQL - lenguaje de consulta de SurrealDB)***

Para poder ejecutar consultas debes escribir lo siguiente en una consola a parte: 

`surreal sql --conn http://localhost:8000 --user root --pass root --ns test --db games_db --pretty`.  

Para más información visita la sección donde se detalla esto en su [sitio web](https://surrealdb.com/docs/cli/sql).   


> **NOTA: La versión de SurrealDB que se usó fue la versión 1.0.0-beta.9+20230402.5eafebd for windows on x86_64 (esta es la versión para Windows).**

<br>

### Creación de tabla

```js
USE NS test; // usa el namespace por defecto
DEFINE DATABASE games_db; // define/crea la base de datos con el nombre especificado

// definición de tablas
DEFINE TABLE video_game SCHEMAFULL;
DEFINE FIELD name ON TABLE video_game TYPE string ASSERT $value != NONE;
DEFINE FIELD launch_date ON TABLE video_game TYPE datetime ASSERT $value != NONE;
DEFINE FIELD price ON TABLE video_game TYPE decimal ASSERT $value != NONE;
DEFINE FIELD creator ON TABLE video_game TYPE string ASSERT $value != NONE;
DEFINE FIELD supported_languages ON TABLE video_game TYPE array ASSERT $value != NONE;
DEFINE FIELD genres ON TABLE video_game TYPE array ASSERT $value != NONE;
```

### Datos de prueba

```js
// Esta sintaxis es válida por consola
CREATE video_game CONTENT { 
  name: "dead island",
  launch_date: "31-05-2016",
  price: 40000,
  creator: "Techland",
  supported_languages: [
      "español de España",
      "inglés",
      "francés",
      "italiano",
      "alemán",
      "checo",
      "polaco",
      "ruso"
    ],
  genres: [ "zombis", "multijugador", "cooperativos", "acción" ]
};
```
