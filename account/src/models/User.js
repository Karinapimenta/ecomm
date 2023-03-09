import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    },
    password: {
      type: String,
      required: true,
      match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,20}$/,
    },
    cpf: {
      type: String,
      required: true,
      match: /^(\d){11}$/,
    },
    phone: {
      type: String,
      required: true,
      match: /^(\d){11,13}$/,
    },
    address: [
      {
        street: { type: String, required: true },
        number: { type: String, required: true },
        complement: { type: String },
        neighborhood: { type: String },
        zipCode: { type: Number, required: true, match: /^(\d){8}$/ },
        city: { type: String, required: true },
        state: { type: String, required: true, match: /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/gmi },
      },
    ],
    shoppingCart: {},
  },
  {
    versionKey: false,
  },
);

userSchema.pre('save', function (next) {
  const user = this;

  if (this.isNew) {
    bcrypt.genSalt(12, (saltError, salt) => {
      if (saltError) {
        return next(saltError);
      }
      bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) {
          return next(hashError);
        }

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

const Users = mongoose.model('users', userSchema);
export default Users;
