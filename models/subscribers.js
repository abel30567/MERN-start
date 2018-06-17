var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String
});

// check email confirmation
userSchema.methods.isEmailConfirmed = function() {
    return this.local.emailConfirmed;
}

module.exports = mongoose.model('User', userSchema);