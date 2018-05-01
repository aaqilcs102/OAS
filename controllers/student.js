let model = require("../models/student");

module.exports = {
  //Handler to handle the route for adding a student profile
  createStudent: (req, res, next) => {
    const {
      name,
      cnic,
      fatherName,
      applyFor,
      district,
      domicile,
      passport,
      mobileNumber,
      email,
      gender,
      image,
      DoB
    } = req.body;

    if (
      typeof name != "string" ||
      typeof cnic != "string" ||
      typeof fatherName != "string" ||
      typeof applyFor != "string" ||
      typeof district != "string" ||
      typeof domicile != "string" ||
      typeof passport != "string" ||
      typeof mobileNumber != "string" ||
      typeof email != "string" ||
      typeof gender != "string" ||
      typeof image != "string" ||
      typeof DoB != "string"
    ) {
      return next({
        json: true,
        status: 422,
        response: false,
        err_code: "INVALID_INPUT",
        message: `Fields are missing or type not valid.`
      });
    }

    let student = {
      name,
      cnic,
      fatherName,
      applyFor,
      district,
      domicile,
      passport,
      mobileNumber,
      email,
      gender,
      DoB: Date(DoB + "GMT"), // Date format must be in Year/Month/Day
      image,
      educationalDetailsID: []
    };

    model
      .createStudent(student)
      .then(result => {
        return res.status(200).json({
          response: true,
          message: "student profile added successfully.",
          userId: result._id
        });
      })
      .catch(err => {
        return next({
          json: true,
          status: 422,
          response: false,
          err_code: "DB_OPERATION_FAILURE",
          message: `failed to add student profile.`
        });
      });
  },
  updateStudent: (req, res) => {
    let { studentDetailsId } = req.params;
    let { id } = req.body;
    model
      .updateStudent(id, studentDetailsId)
      .then(result => {
        return res.status(200).json({
          response: true,
          message: "student updated successfully.",
          userId: result._id
        });
      })
      .catch(err => {
        return next({
          json: true,
          status: 422,
          response: false,
          err_code: "DB_OPERATION_FAILURE",
          message: `failed to update student profile.`
        });
      });
  },
  getStudent: (req, res) => {
    model
      .getStudent()
      .then(result => {
        return res.status(200).json({
          response: true,
          message: "student found.",
          student: result
        });
      })
      .catch(err => {
        return next({
          json: true,
          status: 422,
          response: false,
          err_code: "DB_OPERATION_FAILURE",
          message: `failed to update student profile.`
        });
      });
  }
};
