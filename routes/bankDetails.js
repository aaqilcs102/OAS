const express = require('express');
const router = express.Router();

const mongooseConfig = require('../config/db.config');
const studentDetails = require('../models/student');
const bankDetails = require('../models/bankDetails');

router.post('/bankDetails/:studentId', function(req, res) {
    let bankDetailsInstance;
    let reqInstance = {
        bankName: req.body.bankName,
          bankBranch: req.body.bankBranch,
          accountTitle: req.body.accountTitle,
          accountNumber: req.body.accountNumber
    }
    bankDetailsInstance = new studentDetails(reqInstance);
    studentDetails.find({_id: req.params.studentId}).then((doc) => {
        bankDetailsInstance.save()
        .then((success) => {
            doc[0].bankDetailsID = success;
            doc[0].save().then((success) => {
                res.send('Student bank details are saved successfully \n\n' + success);
            }, (error) => {
                res.send('Not able to save student bank details, error: \n\n' + error);
            });
        }, (error) => {
            res.send('Error: ' + error);            
        });
    }, (error) => {
        res.send('Error: ' + error);        
    });
});
