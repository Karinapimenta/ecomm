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
      match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,10}$/,
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
        zipCode: { type: Number, required: true, match: /^(\d){2}$/ },
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

const Users = mongoose.model('users', userSchema);
export default Users;
