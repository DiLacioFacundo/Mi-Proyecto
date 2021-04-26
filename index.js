console.log('HOLA');
//importar la libreria Express
const express =require('express');
// invocar express() para crear el objeto app(nuestra aplicacion)
const app = expres ();
// definir una ruta para nuestra app
app.get('/', (req, res) => {
  res.send('hola');

});

// decirle al server que escuche peticiones en el puerto 3000
app.listen(PORT);
