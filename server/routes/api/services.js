const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Services=require('../../model/Services')


//facilitating image upload

const multer = require('multer');

  //create storage engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/services');
    },
    filename: function(req, file, cb) {
      let current_datetime = new Date()
      let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + "-" + Math.random()*10000;
      cb(null, formatted_date+file.originalname);
    }
});


const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5 //5 MB
    },
    fileFilter: fileFilter
  });



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
                err.message || "Some error occurred while creating the Service."
            });
        });
})

/**
 * @route GET api/services/display
 * @desc display the Services based on user
 * @access Private
 */

router.get('/displayUser', (req,res) => {
    const query = user =  req.body ;
    Services.find(query)
        .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/display
 * @desc display the Services based on zipcode
 * @access Private
 */

router.get('/displayZip', (req,res) => {
    const query = zipcode = req.body;
    Services.find(query)
        .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/display
 * @desc display the Services based on serviceId
 * @access Private
 */

router.get('/display/:_id', (req,res) => {
  const query = req.params._id;
  Services.findById(query)
      .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/display
 * @desc display the all Services 
 * @access Private
 */

router.get('/display', (req,res) => {
    Services.find()
        .exec((err, services) => res.json(services))
})

/**
 * @route GET api/services/:_id/daycare
 * @desc display the daycare
 * @access Private
 */

router.put('/:_id/daycare', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
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
 * @route GET api/services/:_id/grooming
 * @desc display the grooming
 * @access Private
 */

router.put('/:_id/grooming', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
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
 * @route GET api/services/:_id/organisation
 * @desc display the organisation
 * @access Private
 */

router.put('/:_id/organisation', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
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
 * @route GET api/services/:_id/dogwalker
 * @desc display the dogwalker
 * @access Private
 */

router.put('/:_id/dogwalker', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
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
 * @route GET api/services/:_id/trainer
 * @desc display the trainer
 * @access Private
 */

router.put('/:_id/trainer', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
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
 * @route GET api/services/:_id/breeding
 * @desc display the trainer
 * @access Private
 */

router.put('/:_id/breeding', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
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
