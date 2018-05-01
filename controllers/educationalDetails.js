module.exports = {
  addEducationalDetails: function(req, res) {
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

    const studentId = req.params;

    if (condition) {
      return next({
        json: true,
        status: 422,
        response: false,
        err_code: "INVALID_INPUT",
        message: `Fields are missing or type not valid.`
      });
    }

    model
      .addEducationalDetails(req.body, studentId)
      .then(result => {
        return res.status(200).json({
          response: true,
          message: "educational details added successfully.",
          result
        });
      })
      .catch(err => {
        return next({
          json: true,
          status: 422,
          response: false,
          err_code: "DB_OPERATION_FAILURE",
          message: `Failed to add education details.`
        });
      });
  }
};
