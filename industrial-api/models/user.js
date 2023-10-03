const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    marks: {
        science: String,
        math: String
    }
});

module.exports = mongoose.model("UserTable", userSchema);