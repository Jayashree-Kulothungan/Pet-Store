const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');
const Services = require('../../model/Services');

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */

 router.post('/register', (req, res) => {
     let{
         name,
         email,
         mobile,
         password,
         confirmPassword,
         address
     } = req.body
     if(password !== confirmPassword){
        return res.status(400).json({
            msg: "Password do not match."
        });
     }
     // Check for the Unique Email
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registred"
            });
        }
    });
    // Check for unique mobile number
    User.findOne({
        mobile : mobile 
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "mobile is already taken."
            });
        }
    });
    // The data is valid and new we can register the user
    let newUser = new User({
        name,
        email,
        mobile,
        password,
        address
    });
    //Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now registered."
                });
            });
        });
    });
 });

 /**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.post('/login', (req, res) => {
    User.findOne({
        mobile: req.body.mobile
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "mobile number is not found.",
                success: false
            });
        }
        // If there is user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                    address: user.address
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: " You are now logged in."
                    });
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });
});

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.post('/login/otp', (req, res) => {
    User.findOne({
        mobile: req.body.mobile
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "mobile number is not found.",
                success: false
            });
        }
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            address: user.address
        }
        jwt.sign(payload, key, {
            expiresIn: 604800
        }, (err, token) => {
            res.status(200).json({
                success: true,
                token: `Bearer ${token}`,
                user: user,
                msg: " You are now logged in."
            });
        })
        // If there is user we are now going to compare the password
    });
});
/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

//check for mobile number 
router.post('/otp',(req,res)=>{
    User.findOne({
        mobile: req.body.mobile
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "mobile number is not found.",
                success: false
            });
        }
        return res.status(200).json({
            msg: "mobile number is found.",
            success: true
        });
        
    })
})

//update password using mobile parameter
router.put('/reset-password',(req,res)=>{
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    let mobile = req.body.mobile;
    let pass= req.body.password;
    newPass =  { $set: {password : pass} };
        User.findOneAndUpdate(mobile, newPass,{ useFindAndModify: true})
            .exec((err, users) => res.json(users))
})

 module.exports = router;
