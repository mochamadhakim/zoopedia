const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    jenis : {
        type: String,
        required: true
    },
    habitat : String,
    jumlah : Number,
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;