const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Habilita CORS para todas las rutas

app.get('/api', (req, res) => {
  res.send('Saludos desde la API');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
