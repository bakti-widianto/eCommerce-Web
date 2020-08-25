var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET home page. */
router.get('/', function (req, res, next) {
  models.Products.findAll({})
    .then(function (barang) {
      res.json(barang);
    }).catch(function (error) {
      res.json(error)
    });
});

router.post('/', function (req, res) {
  let { title, rate, desc, price, brand, detailProduct, colors, capacities } = req.body
  models.Products.create({
    title,
    rate,
    description: desc,
    price,
    brand,
    detail_product: detailProduct,
    colors,
    capacities
  })
    .then(product => {
      res.json({
        error: false,
        itemAdded: product
      })
    })
    .catch(err => {
      res.json({
        error: true,
        err
      })
    })

})

router.get('/:id', function (req, res) {
  models.Products.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/:id', function (req, res) {
  models.Products.destroy({
    returning: true,
    where: {
      id: req.params.id
    }
  })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;
