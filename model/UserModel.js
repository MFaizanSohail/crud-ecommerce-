// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
// 	name: String,
// 	email: String,
// 	password: String,
// });

// const UserModel = mongoose.model("User", UserSchema);
// module.exports = UserModel;



const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: 'buyer',
  },
});

// Pre-save hook to hash the password before saving the user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
