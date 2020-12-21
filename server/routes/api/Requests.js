const express = require('express');
const { mongo } = require('mongoose');
const router = express.Router();
const Status=require('../../model/Requests');
const cors = require('cors');

/**
 * @route POST api/request/register
 * @desc Register the Request
 * @access Private
 */
router.post('/register', (req, res) => {
    const newRequest = new Status(req.body)
    newRequest
        .save(newRequest)
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
 * @route POST api/request/display
 * @desc display the request based on CustomerId (My Requests)
 * @access Private
 */

router.post('/displayRequest', (req,res) => {
    const query = CustomerId =  req.body ;
    Status.find(query)
        .exec((err, status) => res.json(status)) 
  })

/**
 * @route POST api/request/display
 * @desc display the request based on DealerId (Responses)
 * @access Private
*/
router.post('/displayResponse', (req,res) => {
    const query = req.body ;
    Status.find(query)
        .exec((err, status) => res.json(status))  
})

router.put('/update/:id', (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    } 
    const id=req.params.id;
    const updateMessage = {
        $push : {
            "message": { "sender": "Customer", "content": req.body, "date" : new Date() }
         }
    }
    Status.findByIdAndUpdate({_id : id},updateMessage,{ useFindAndModify: false } )
})

router.delete('/delete/:id',(req, res) => {   
    const id= req.params.id   
    console.log(id)
        Status.remove({
            _id: id
        }, function (err, status) {
            if (err) return res.send(err);
            res.json(status);
        });
    });
    
router.put('/message/customer/:id',(req, res) => {
    const id=req.params.id;
    console.log(id)
    const updateMessage = {
        $push : {
            "message": { "sender": "Customer", "content": req.body, "date" : new Date() }
         }
    }
    Status.findByIdAndUpdate({_id : id},updateMessage,{ useFindAndModify: false } )
        .exec((err, status) => res.json(status))
})
    


module.exports = router;
