import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    name:String,
    alias:String
})

export default mongoose.model('DEMO',userSchema);
