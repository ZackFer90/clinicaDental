const express = require('express');
const userController = require("../controllers/users");
const { verify } = require('jsonwebtoken');
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get("/", verifyToken, userController.getAll);

router.get("/getDoctor", userController.getDoctor);

router.post("/create-Appointment", verifyToken, userController.createAppointment);

router.put("/update-user", verifyToken, userController.updateUser);

router.put("/update-Appointment", userController.updateAppointment);

router.delete("/delete-appoint", verifyToken, userController.deleteAppointment);

router.get("/get-Appointment", verifyToken, userController.getAppointment);

router.put("/searchAppointment", verifyToken, userController.searchAppointment);

module.exports = router;
