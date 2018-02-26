/**
 * Created by Thatta on 17/02/2018.
 */
const  mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const  VideoSchema = new Schema({

    title: String,
    url: String,
    discription:String

});

module.exports= mongoose.model('video',VideoSchema,'videos');