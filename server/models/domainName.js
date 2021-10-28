const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
    domainName: String,
    isIssused: Boolean,
    domainCertificate: String,
    publicKey: String,
    subCertificate: {
        type: domainSchema
    },
    date: {
        type: String,
        default: Date.now
    }

});

module.exports = mongoose.model('domainName', domainSchema);