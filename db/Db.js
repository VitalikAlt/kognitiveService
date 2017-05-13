const mongoose = require('mongoose');
const searches = require('./models/users/query');

class Db {
    static connect(url) {
        mongoose.connect(url);
    }

    static get users() {
        return searches;
    }
}

module.exports = Db;