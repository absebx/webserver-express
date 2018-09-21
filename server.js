const express = require('express');
const app = express();

var hbs = require('hbs');

require('./hbs/helpers'); //ya que registra y solamente 'ejecuta' el código

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public' )); //es la direccion por defecto, donde mandará

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //directorio con los parciales
app.set('view engine', 'hbs');

// helpers


// para llegar a la pagina html, solamente hay que dar la dirección para allá, se puede servir cualquier cosa
app.get('/', (req, res)=>{

  res.render('home', {
    nombre: 'aBNER',
    anio: new Date().getFullYear()
  });

  // let salida = {
  //   nombre: 'ALfonso',
  //   edad: 32,
  //   url: req.url
  // }
  // res.send(salida);
  // res.send('Hola mundo');
});

app.get('/about', (req, res)=>{
  res.render('about', {
    anio: new Date().getFullYear()
  });
});

app.get('/data', (req, res)=>{
  res.send('Hola data');
})
 
app.listen(port, ()=>{
  console.log(`Escuchando en puerto: ${port}`); //callback se ejecuta cuando se levanta
});