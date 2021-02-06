import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String
  },
  age: {
    type : Number
  }
});

userSchema.statics.findByLogin = async function(uname, psw) {
  let user = await this.findOne({
    username: uname,
    password: psw
  });

  if (!user) {
    user = await this.findOne({ email: uname });
  }

  return user;
};

userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;
