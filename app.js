const express = require('express');
const mongoose = require('mongoose');
const api = require('./routes/search');

const app = express();
const port  = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Connexion with mongoose
mongoose.connect('mongodb://usersearch:123456ls@ds153093.mlab.com:53093/search',{ useNewUrlParser: true}, (err, res) => {
  if(err) throw console.log('Error al conectarse');
  console.log('Conectado a MongoDB');
});

app.set('view engine', 'pug');
app.use(api);

// app.get('/', (req, res) => {
//   res.render('index')
// })

// app.get('/account', (req, res) => {
//   res.render('account')
// })

app.listen(port, ()=> {
  console.log(`Run in port ${port}!`);
})