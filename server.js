const express = require('express')
const app = express();
const server = app.listen(3004, function() {
  console.log('Servidor encendido');
});

app.use(express.static('public'));