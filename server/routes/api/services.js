const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');
const Services=require('../../model/Services')
var ObjectID = require('mongodb').ObjectID;

/**
 * @route POST api/services/register
 * @desc Register the Services
 * @access Private
 */

router.post('/register', (req, res) => {
    const newService = new Services(req.body);
    newService
        .save(newService)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
})

/**
 * @route GET api/services/display
 * @desc display the Services based on user
 * @access Private
 */

router.get('/display', (req,res) => {
    const query = user =  req.body ;
    Services.find(query)
        
        .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/display
 * @desc display the Services based on zipcode
 * @access Private
 */

router.get('/displayAll', (req,res) => {
    const query = zipcode = req.body;
    Services.find(query)
        .exec((err, services) => res.json(services))
})
/**
 * @route GET api/services/update/daycare
 * @desc display the daycare
 * @access Private
 */

router.put('/:_id/daycare', (req,res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    const id=req.params._id;
    Services.findByIdAndUpdate({_id : id}, req.body,{ useFindAndModify: false } )
    .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/update/grooming
 * @desc display the grooming
 * @access Private
 */

router.put('/:_id/grooming', (req,res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    const id=req.params._id;
    Services.findByIdAndUpdate({_id : id}, req.body,{ useFindAndModify: false } )
    .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/update/organisation
 * @desc display the organisation
 * @access Private
 */

router.put('/:_id/organisation', (req,res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    const id=req.params._id;
    Services.findByIdAndUpdate({_id : id}, req.body,{ useFindAndModify: false } )
    .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/update/dogwalker
 * @desc display the dogwalker
 * @access Private
 */

router.put('/:_id/dogwalker', (req,res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    const id=req.params._id;
    Services.findByIdAndUpdate({_id : id}, req.body,{ useFindAndModify: false } )
    .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/update/trainer
 * @desc display the trainer
 * @access Private
 */

router.put('/:_id/trainer', (req,res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    const id=req.params._id;
    Services.findByIdAndUpdate({_id : id}, req.body,{ useFindAndModify: false } )
    .exec((err, services) => res.json(services))
})

module.exports = router;