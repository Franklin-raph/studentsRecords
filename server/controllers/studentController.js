const { default: mongoose } = require('mongoose');
const StudentModel = require('../models/studentsModel');

// Add Student
const registerStudent = async (req, res) => {
    const { fName, lName, address, phoneNum, email } = req.body;
    if(!fName || !lName || !address || !phoneNum || !email) return res.status(400).json({Msg: "Please fill in all fields"})
    try {
        const existingEmail = await StudentModel.findOne({email:email})
        if(existingEmail) return res.status(401).json({Msg: "Email already exists"})

        const studentDetails = await StudentModel.create({fName, lName, address, phoneNum, email})
        res.status(201).json( studentDetails )
    } catch (error) {
        res.status(500).json({Msg: error.message})
    }
}

// View All Students
const viewAllStudents = async (req, res) => {
    try {
        const allstudents = await StudentModel.find().sort({ createdAt: -1 })
        console.log(allstudents)
        res.status(200).json(allstudents)

    } catch (error) {

    res.status(500).json({Msg: error.message})
    }
}

// View A Single Student
const viewASingleStudents = async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({Msg: "Student details not found"})

        const studentDetail = await StudentModel.findById(req.params.id)
        console.log(studentDetail)
        if(!studentDetail) return res.status(404).json({Msg: "Student details not found"})
        res.status(200).json(studentDetail)
    } catch (error) {
        res.status(500).json({Msg: error.message})
    }
}

// Update Student
const updateAStudentDetails = async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({Msg: "Student details not found"})

        const studentDetail = await StudentModel.findById(req.params.id)
        if(!studentDetail) return res.status(404).json({Msg: "Student details not found"})

        const updatedStudentDetail = await StudentModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        console.log(updatedStudentDetail)
        res.status(200).json(updatedStudentDetail)
    } catch (error) {
        res.status(500).json({Msg: error.message})
    }
}

// Delete Student
const deleteAStudentDetails = async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).json({Msg: "Student details not found"})
        
        const studentDetail = await StudentModel.findOneAndDelete({_id: req.params.id})
        console.log( req.params.id)
        if(!studentDetail) return res.status(404).json({Msg: "Student details not found"})
        res.status(200).json({id:req.params.id})
    } catch (error) {
        res.status(500).json({Msg: error.message})
    }
}


module.exports = {
    registerStudent,
    viewAllStudents,
    viewASingleStudents,
    updateAStudentDetails,
    deleteAStudentDetails,
}
