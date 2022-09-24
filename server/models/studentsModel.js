const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    email: {
        type: "String",
        required: [true, "Please enter an email"],
    },
    fName: {
        type: "String",
        required: [true, "Please enter a name"],
    },
    lName: {
        type: "String",
        required: [true, "Please enter a name"],
    },
    address: {
        type: "String",
        required: [true, "Please enter an address"],
    },
    phoneNum: {
        type: "String",
        required: [true, "Please enter your phone number"],
    },
}, {timestamps: true})


module.exports = mongoose.model('Student', StudentSchema);



// module.exports = mongoose.model("User", userSchema)
// user:{
//     type: mongose.Schema.Types.ObjectId,
//     required: true,
//     ref: "User"
// }
