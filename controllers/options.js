'use strict'
const { ObjectId } = require('mongodb');


const opt = require('../models/options')

function getOptions(req, res) {
  opt.find({})
  .sort({ nombre: 1 })
  .exec((err, result) => {
    if(err) return res.status(500).send({message: 'Error al realizar la Peticion'})
    // res.status(200).send({result})
    res.render('index', {items: result})
  })
}

function create(req, res) {
  opt.find({})
  .exec((err, result) => {
    if(err) return res.status(500).send({message: 'Error al realizar la Peticion'})
  res.render('createOption', {items: result})
  })
}

function addcat(req, res) {
  let newCateg = new opt();
  newCateg.nombre = req.body.categ;
  newCateg.estado = true;
  newCateg.save((err, saveCateg) => {
    if (err) return  res.status(500).send({message: 'error al realizar peticion'})
    res.redirect('/create');
  })
}

function addsubcat(req, res) {
  const id = req.body.option
  const name = req.body.subcat
  opt.updateOne(
    { _id: id},
    {
      $push: {'subcat': {nombre: name, estado: true}}
    },
    {},
    (err, result) => {
      if(err) res.status(500).send({message: 'Error al Agregar'})
      res.redirect('/create')
    }
  )
}

function buscar(req, res) {
  const data = {
    word: req.query.word,
    option: req.query.option,
  }

try {
    opt.aggregate([
    // {$match: {'_id': data.option}},
    // {$unwind: "$subcat"},
    // {$match: {"subcat.nombre": data.word}},
    {$match: {_id: ObjectId(data.option)}},
    {$unwind: "$subcat"},
    {$match: {"subcat.nombre": {$regex: new RegExp(data.word), $options: 'i'}}},

   
    // {_id: data.option, 'subcat.nombre': {$regex: new RegExp(data.word), $options: 'i'}},
    // {subcat: {"$elemMatch": {"nombre": {$regex:  new RegExp(data.word)}} }.
  ])
  // .where('_id').equals(data.option)
  .exec((err, result) => {
    if(err) res.render('resultados', {res: false})
    console.log(result)
    res.render('resultados', {res: result})  

    //   // return 'fail'
    // }
  })
  } catch (error) {
    res.render('resultados', {res: false})
  }
}
// Export
module.exports = {
  getOptions,
  create,
  addcat,
  addsubcat,
  buscar
}