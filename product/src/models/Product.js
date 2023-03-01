import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: { type: String },
    product: {
      type: String,
      required: true,
      minlength: 3,
      match: /^\D+(\w*\d*\s*)*\S+$/,
    },
    description: { type: String, rquired: true },
    slug: {
      type: String,
      required: true,
      match: /^(\w+-?)*$/,
    },
    pricePerUnit: {
      type: mongoose.Types.Decimal128,
      required: true,
      min: 0.01,
    },
    quantityInStock: {
      type: mongoose.Types.Decimal128,
      required: true,
      min: 1,
      max: 10000,
    },
    category: { _id: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true } },
  },
  {
    versionKey: false,
  },
);

const products = mongoose.model('products', productSchema);

export default products;
