const model = require("../models/educationalDetails");
const mongoose = require("mongoose");

module.exports = {
  addEducationalDetails: function(req, res, next) {
    const {
      degreeName,
      degreeLevel,
      degreeInstitute,
      degreeSubject,
      totalMarks,
      obtainedMarks,
      totalGPA,
      obtainedGPA,
      passingYear,
      rollNumber,
      thesisCheck
    } = req.body;

    const { studentId } = req.params;

    if (
      typeof degreeName != "string" ||
      typeof degreeLevel != "string" ||
      typeof degreeInstitute != "string" ||
      typeof degreeSubject != "string" ||
      ((typeof totalMarks != "number" || typeof obtainedMarks != "number") &&
        (typeof totalGPA != "number" || typeof obtainedGPA != "number")) ||
      typeof passingYear != "number" ||
      typeof rollNumber != "string" ||
      typeof thesisCheck != "boolean" ||
      !mongoose.Types.ObjectId.isValid(studentId)
    ) {
      return next({
        json: true,
        status: 422,
        response: false,
        err_code: "INVALID_INPUT",
        message: `Fields are missing or type not valid.`
      });
    }

    model
      .addEducationalDetails(req.body, studentId, next)
      .then(result => {
        return res.status(200).json({
          response: true,
          message: "educational details added successfully.",
          result
        });
      })
      .catch(err => {
        if (err.name == "CastError") {
          return next({
            json: true,
            status: 422,
            response: false,
            err_code: "INVALID_INPUT",
            message: `studentId not valid in URI.`
          });
        }
        return next({
          json: true,
          status: 422,
          response: false,
          err_code: "DB_OPERATION_FAILURE",
          message: `Failed to add education details.`,
          err: err
        });
      });
  }
};
