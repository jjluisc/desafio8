const express = require('express');
const { Router } = express;
const router = Router()
const Products = require('../container/container');
const products = new Products('products');

router.get('/productos', async (req, res) => {
    try {
        res.status(200).render('./pages/index')
      } catch (error) {
        res.send([]);
      } 
})



module.exports = router;