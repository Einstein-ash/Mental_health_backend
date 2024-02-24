
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // data: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DataModel' }],
});

studentSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = { Student};



