const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = Schema({
  nombre: String,
  estado: Boolean,
  subcat: [
    { nombre: String, estado: Boolean },
  ]
})

module.exports = mongoose.model('option', optionSchema)