const express = require('express')
const router = express.Router()

const studentController = require('../controllers/studentController')

router.get('/', studentController.viewAllStudents)
router.post('/register', studentController.registerStudent)
router.get('/:id', studentController.viewASingleStudents)
router.patch('/:id', studentController.updateAStudentDetails)
router.delete('/:id', studentController.deleteAStudentDetails)

module.exports = router