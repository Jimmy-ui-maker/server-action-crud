const mongoose = require('mongoose')

export default async function dbConnect(){
    await mongoose.connect(process.env.MONGODB_URI);
}