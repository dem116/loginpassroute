// Snippets de código para poder componer el programa

//Usado?: YES
const middlewares = require('./middlewares');
//--- Explicación: 
//requiere todas las funciones en el modulo/archivo middlewares para poder usarlas en app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:
/*Usado para importar boddyparse en app.js-->Se usa para analizar 
cuerpos de solicitud (request bodies) entrantes en un middleware antes de que se procesen (google)*/
// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:
/*Usado en app.js para importar express-sesion--> se usa para manejar y guardar datos de 
sesiones en la aplicación (google)*/
// -------------------------------------------------------------------------------------

//Usado?: YES 
const express = require('express');
//--- Explicación:
// -usado para requerir express en app.js y usar express (x1)
// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:
/*Usado en el modulo middleware para importar boddyparse-->Se usa para analizar 
cuerpos de solicitud (request bodies) entrantes en un middleware antes de que se procesen (google)*/
// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:
/*Usado en middlewares para importar express-sesion--> se usa para manejar y guardar datos de 
sesiones en la aplicación (google)*/
// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación:
//Para cargar las variables de entorno definidas en el archivo .env en app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const middlewares = require('./middlewares');
//--- Explicación:
// requiere funciones del archivo/modulo middlewares para poder usarlos en routes.js
// -------------------------------------------------------------------------------------

//Usado?: YES 
const routes = require('./routes');
//--- Explicación:
// requerir las rutas en app.js para poder usarlas
// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación:
//cargar las variables y configuracion definidas en el archivo .env (usado en app.js)
// -------------------------------------------------------------------------------------

//Usado?: YES
const app = express();
//--- Explicación:
// Usado para inicializar express en app.js 
// -------------------------------------------------------------------------------------

//Usado?: YES
const PORT = 4000;
//--- Explicación:
//Constante que guarda el puerto para usar al crear e inciar el servidor (usado en app.js)
// -------------------------------------------------------------------------------------

//Usado?: NO
const dotenv = require('dotenv');
//--- Explicación:
// no hay un modulo asi para exportar
// -------------------------------------------------------------------------------------

//Usado?: NO
dotenv.config();
//--- Explicación:
//ya se uso una vez en app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
middlewares.setupApp(app);
//--- Explicación: 
//Llama a la funcion setupApp desde el modulo middlewares en app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
routes.setup(app);
//--- Explicación: 
// Lllama a la funcion setup desde el modulo routes en app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 
// funcion que valida la plabra secreta para la sesion (usada en middlewares)
// -------------------------------------------------------------------------------------


//Usado?: YES
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro--->res.send(`.......
})}
//--- Explicación: 
/*Define la ruta incial y muestra el mensaje de error si la palabra secreta es incorrecta y si es correcta
va al res.send/perfil "logueado". Usado en routes.js*/
// -------------------------------------------------------------------------------------


//Usado?: YES
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
/*Resto del codigo de la funcion "setup". Muestra el form para recojer una palabra con el boton enviar,
muestra el mensaje en pantalla si existe el error con la palabra*/
// -------------------------------------------------------------------------------------

//Usado?: YES
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: 
/*Define una función que configura middlewares globales para Express y 
usa bodyParser para analizar cuerpos de solicitud y express-session para manejar sesiones(google). Usado en middlewares*/
// ------

//Usado?: YES 
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
/*Define la ruta POST para /profile, si la validación pasa se envíala respuesta HTML con
la ruta del perfil y un botón para cerrar sesión*/
// -------------------------------------------------------------------------------------

//Usado?: NO
app.use(bodyParser.urlencoded({ extended: true }));
//--- Explicación: 
//esta ya en la funcion de middlewares en setupAPP
// -------------------------------------------------------------------------------------

//Usado?: NO
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));
//--- Explicación: 
//esta tambien en middlewares en setupAPP
// -------------------------------------------------------------------------------------

//Usado?: YES
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
/*usado en app.js para poner en marcha el servidor y que escuche en el puerto que hemos dejado en la constante, ademas 
de darnos el mensaje con el enlace donde renderiza y el puerto a la vista con el console.log*/
// -------------------------------------------------------------------------------------

//Usado?: YES
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
//funcion que valida la sesion con la plabra secreta (usada en middlewares)
// -------------------------------------------------------------------------------------


//Usado?: YES
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//Al pasar la verificacion de sesion, esto muestra el perfil y un boton para cerrar la sesion. Usado en routes.js
// -------------------------------------------------------------------------------------


//Usado?: YES
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
/*Accion en el perfil que cierra la sesion y reenvia al inicio, si hay error cerrando lo muestra por consola.
Usado en routes.js*/
// -------------------------------------------------------------------------------------

//Usado?: YES 
module.exports = {
  setup,
};
//--- Explicación:
//Usado para exportar setup en rutas 
// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
// Exprota las funciones y configuraciones del archivo middlewares 
// -------------------------------------------------------------------------------------

