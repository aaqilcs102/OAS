const express = require('express');
const router = express.Router();

const mongooseConfig = require('../config/db.config');
const {studentDetails} = require('../models/student');

// API end poing for Saving student details
router.post('/studentDetails', function(req, res, next) {
    let studentInstance;
    let reqInstance = {
        name: req.body.name,
        cnic: req.body.cnic,
        fatherName: req.body.fatherName,
        applyFor: req.body.applyFor,
        district: req.body.district,
        domicile: req.body.domicile,
        passport: req.body.passport,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email,
        gender: req.body.gender,
        DoB: '',                                // Date format must be in Year/Month/Day
        image: req.body.image,
        educationalDetailsID: []
    }
    reqInstance.DoB = new Date(req.body.DoB + 'GMT');
    studentInstance = new studentDetails(reqInstance);
    studentInstance.save().then((success) => {
        res.send(success);
    }, (error) => {
        res.send(error);
    });
});

//API endpoint to add ID educational Details of the student
router.patch('/studentDetails/:studentDetailsId', function(req, res) {
    studentDetails.findByIdAndUpdate(req.params.studentDetailsId, { "$push": { "educationalDetailsID": req.body.id } })
        .then((success) => {
            res.send('Successfully id added ' + success);
        }, (error) => {
            res.send('Failed to add the id ' + error);
        });
});

module.exports = router