import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async () => {
  const { username, email, password } = await req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User(username, email, hashedPassword);
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const validPassword = await User.findOne({ password: password });
    if (!validPassword)
      return res.status(401).json({ message: "Wrong credentials" });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
