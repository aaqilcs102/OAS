const express = require('express');
const router = express.Router();

const mongooseConfig = require('../config/db.config');
const {studentDetails} = require('../models/student');
const {educationalDetails} = require('../models/educationalDetails');

//API endpoint to add an individual educationalDetails document
router.post('/educationalDetails/:studentId', function(req, res) {
    let educationalDetailsInstance;
    let reqInstance = {
        degreeName: req.body.degreeName,
        degreeLevel: req.body.degreeLevel,
        degreeInstitute: req.body.degreeInstitute,
        degreeSubject: req.body.degreeSubject,
        totalMarks: req.body.totalMarks,
        obtainedMarks: req.body.obtainedMarks,
        totalGPA: req.body.totalGPA,
        obtainedGPA: req.body.obtainedGPA,
        passingYear: req.body.passingYear,
        rollNumber: req.body.rollNumber,
        thesisCheck: req.body.thesisCheck
    }
    educationalDetailsInstance = new educationalDetails(reqInstance);

    studentDetails.find({_id: req.params.studentId}).then((doc) => {

    educationalDetailsInstance.save()
        .then((success) => {
            doc[0].educationalDetailsID .push(success);
            doc[0].save().then((success) => {
                res.send("Student Educationa Details added: \n\n" + success);
            });
        }, (error) => {
            res.send('Not able to add educational Details, error: ' + error);
        });
    }, (error) => {
        console.log('Error: ' + error);
    });
});

module.exports = router;
