const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const crypto = require('crypto-js')
const Clinics=require('../../model/Clinics');
const { Mongoose } = require('mongoose');

//facilitating image upload

const multer = require('multer');
  //create storage engine
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/clinics');
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


router.post('/register', upload.array('productImage'),(req, res) => {
    //console.log(req.file)
    var paths = req.files.map(file => file.path)
    //console.log(paths)
    const newClinics = new Clinics({
        zipcode : req.body.zipcode,
        name : req.body.name,
        email : req.body.email,
        website : req.body.website,
        phone: req.body.phone,
        location : req.body.location,
        productImage : paths,
        user : req.body.user
    });
    newClinics 
        .save(newClinics)
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
    Clinics.find(query)
        
        .exec((err, clinics) => res.json(clinics))
})

/**
 * @route GET api/services/display
 * @desc display the Services based on zipcode
 * @access Private
 */

router.get('/displayAll', (req,res) => {
    const query = zipcode = req.body;
    Clinics.find(query)
        .exec((err, clinics) => res.json(clinics))
})


/**
 * @route GET api/services/update/daycare
 * @desc display the daycare
 * @access Private
 */

router.put('/:_id/update', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    const id=req.params._id;
    Clinics.findByIdAndUpdate({_id : id}, req.body,{ useFindAndModify: false } )
    .exec((err, clinics) => res.json(clinics))
})


module.exports = router;
