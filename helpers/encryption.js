module.exports = {

    encrypt: function(password) {
        const crypto = require('crypto');
        const hash = crypto.createHmac('sha256', 'secret').update(password).digest('hex');
        return hash;
    }
}