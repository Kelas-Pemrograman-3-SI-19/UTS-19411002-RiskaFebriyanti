const mongoose = require('mongoose')
const Schema = mongoose.Schema

const calonanggotaSchema = new Schema({
    namaMahasiswa: {
        type: String
    },
    Npm: {
        type: String
    },
    JenisKelamin: {
        type: String
    },
    TempatTanggalLahir: {
        type: String
    },
    JenisKelamin: {
        type: String
    },
    Fakultas: {
        type: String
    },
    NoHP: {
        type: String
    },
    EMAIL: {
        type: String
    }
    
    
}) 

module.exports = mongoose.model('calonanggota', calonanggotaSchema)