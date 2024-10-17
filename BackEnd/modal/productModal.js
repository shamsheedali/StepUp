import mongoose from "mongoose";

//variant
const variantSchema = new mongoose.Schema({
  name:{type: String, required: true},
  description:{type: String},
  size: [String],
  color: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  images: [{ type: String, required: true }], // Images specific to variant
  isDeleted: {type: Boolean, default: false}
});

//product
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  newArrival: {
    type: Boolean,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  stock: {
    type: String,
    required: true,
  },
  images: [{ type: String, required: true }],
  variants: [variantSchema],
}, {
    timestamps: true,
});


const Product = mongoose.model('Product', productSchema);
export default Product;