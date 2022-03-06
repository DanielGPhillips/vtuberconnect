const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength:24,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email adress!']
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.has(this.password, saltRounds);
    }

    next();
});

profileSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

model.exports = User;