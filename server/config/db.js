const mongoose = require('mongoose');

const connectionMethod = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        // await mongoose.connect('mongodb://localhost/student-records')
        console.log(typeof process.env.MONGO_URI, "Db connected successfully")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = { connectionMethod }