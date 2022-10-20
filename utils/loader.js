const { option } = require("../config/config");
const knex = require("knex")(option.mysql);
const knex3 = require('knex')(option.sqlite)

const productos = require('./file.json')



knex3('messages').del()
.then(() => console.log('registro eliminado'))
.catch((error) => {
  console.log(error);
  throw error;      
})
.finally(() => knex3.destroy()); 
