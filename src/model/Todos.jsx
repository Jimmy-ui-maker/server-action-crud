import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Todos || mongoose.model("Todos", todoSchema);

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
