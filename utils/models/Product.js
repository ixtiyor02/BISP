import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    description: {
      type: String,
    },
    images: [{ type: String }],
    price: {
      type: Number,
    },
    originalPrice: {
      type: Number,
    },
    brand: {
      type: String,
    },
    material: {
      type: String,
    },
    bracelet: {
      type: String,
    },
    condition: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    averageRating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    featured: {
      type: Boolean,
      default: false,
    },
    thickness: {
      type: String,
      default: "12mm",
    },
    thickness: {
      type: String,
      default: "12mm",
    },
    bandsize: {
      type: String,
      default: "14.5cm - 22.5cm",
    },
    lugs: {
      type: String,
      default: "20mm",
    },
    water: {
      type: String,
      default: "3 ATM",
    },
  },
  { timestamps: true }
);

productSchema.methods.hasUserPurchased = async function (userId) {
  const Order = mongoose.model("Order");
  const order = await Order.findOne({
    user: userId,
    cartProducts: this._id,
    status: "delivered",
    paid: true,
  });
  return !!order;
};

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
