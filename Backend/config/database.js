const mongoose = require('mongoose')

const configureDB = async(req,res)=>{
    try{

        const mongoconnect = await mongoose.connect('mongodb://127.0.0.1:27017/Hypersrot_task')
        console.log('succesfully connected to mongodb ')
    }
    catch(e){
        console.log(e)
    }
}

module.exports = configureDB