import mongoose from 'mongoose';

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

const User = mongoose.model('User', userSchema);
export default User;
