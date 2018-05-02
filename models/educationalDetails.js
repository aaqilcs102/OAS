const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const student = require("./student");

let educationalDetails = (module.exports = mongoose.model(
  "educationalDetails",
  {
    degreeName: {
      type: String,
      required: true
    },
    degreeLevel: {
      type: String,
      required: true
    },
    degreeInstitute: {
      type: String,
      required: true
    },
    degreeSubject: {
      type: String,
      required: true
    },
    totalMarks: {
      type: Number
    },
    obtainedMarks: {
      type: Number
    },
    totalGPA: {
      type: Number
    },
    obtainedGPA: {
      type: Number
    },
    passingYear: {
      type: Date
    },
    rollNumber: {
      type: String,
      required: true
    },
    thesisCheck: {
      type: Boolean
    }
  }
));

educationalDetails.addEducationalDetails = (input, studentId, next) => {
  return student
    .findById(studentId)
    .then(result => {
      return new educationalDetails(input)
        .save()
        .then(success => {
          result[0].educationalDetailsID.push(success);
          return result[0].save();
        })
        .catch(err => {
          console.log("failedasdf");
          return next({
            json: true,
            status: 422,
            response: false,
            err_code: "DB_OPERATION_FAILURE",
            message: `Failed to add education details.`,
            err: err
          });
        });
    })
    .catch(err => {
      console.log("failed");
      return next({
        json: true,
        status: 422,
        response: false,
        err_code: "DB_OPERATION_FAILURE",
        message: `Failed to add education details.`,
        err: err
      });
    });
};
