const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagenMapaSchema = mongoose.Schema({
    
    url:{
        type:String,
        required:true
    },
    

});



module.exports = mongoose.model('ImagenMapa',ImagenMapaSchema);