const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const games = require('./routes/games')

app.use(express.json());

app.use('/games', games);



app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

