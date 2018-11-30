const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    knex('workout')
    .then((results) => {
      res.json(results)
  })
 },
 getOne: (req,res) => {
   knex('workout').where('id', req.params.id)
   .then((results) => {
     res.json(results)
   })
 },
 create: (req,res) => {
   knex('workout').insert({
     date: req.body.date,
     name: req.body.name,
     description: req.body.description,
     rating: req.body.rating
   }).then((results) => {
     res.json(results)
   })
 },
 update: (req,res) => {
   knex('workout').update({
    date: req.body.date,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating
   }).where('id', req.params.id)
   .then((results) => {
     res.json(results)
   })
 },
 delete: (req,res) => {
   knex('workout')
   .del()
   .where('id', req.params.id)
   .then(() => {
     res.json({message: 'Success!'})
   })
 }
}
