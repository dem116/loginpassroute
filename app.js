const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const routes = require('./routes');
const middlewares = require('./middlewares');

const PORT = 4000;

dotenv.config();

middlewares.setupAPP(app);

routes.setup(app);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});