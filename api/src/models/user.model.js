import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Username must be at least 3 characters."],
      maxLength: [250, "Username must be within 250 characters."],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      maxLength: [250, "Email must be within 250 characters."],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password must be at least 6 characters."],
      maxLength: [250, "Password must be within 250 characters."],
    },
  },
  { timestamps: true }
);

// userSchema.pre('save', async (next) => {
// 	if (!this.isModified('password')) return next();
// 	password = await bcrypt.hash(password, 12);
// 	next();
// })

const User = mongoose.model("User", userSchema);

export default User;
