import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({
    title:{
        type: String
    },
    note:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Todos || mongoose.model('Todos', todoSchema)