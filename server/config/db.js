const mongoose = require('mongoose');

const connectionMethod = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Db connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = { connectionMethod }