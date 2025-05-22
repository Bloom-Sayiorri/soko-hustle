import mongoose from "mognoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			minLength: 3,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		quantity: {
			type: Number,
			required: true,
			default: 0,
		},
		image: {
			type: String,
			required: false,
		},
		y_o_m: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
