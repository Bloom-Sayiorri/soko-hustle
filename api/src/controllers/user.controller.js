import User from "../models/user.model.js";

const getAllUsers = async (res, req, next) => {
  try {
    const users = await User.find({});
    if (products) {
      res.status(500).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.tatus(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    // const parsed = await userSignupSchema.safePaParse(req.body);
    // if(!parsed.success) {
    //     return req.status(400).json({errors: parsed.error.flatten().fieldErrors})
    // }
    // const { username, email, password } = parsed.data;
    // const user = await User.create({username, email, password});
    const user = await User.create(req.body);
    if (!user.success) {
      res.status(500).json({ message: "User not created" });
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findByIdAndUpdate(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findByIdAndDelet(id);
    if (!user) {
      res.status(404).json({ message: "User not deleted" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAllUsers, getUser, createUser, updateUser, deleteUser };
