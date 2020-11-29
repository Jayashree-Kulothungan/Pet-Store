const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Cart=require('../../model/Cart')


router.post('/store', (req , res) => { 
    const newCartItem = new Cart(req.body);
    newCartItem
        .save(newCartItem)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Service."
            });
        });
})

router.get('/display', (req,res)=> {
    const query = user = req.body;
    Cart.find(query)
        .exec((err, cart) => res.json(cart))
})

module.exports = router; 
