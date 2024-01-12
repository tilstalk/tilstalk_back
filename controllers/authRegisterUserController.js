const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = class AuthRegisterUserController {
  static async init(req, res) {
    res.send({ message: "Welcome to our API" });
  }

  static async registerUser(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    if (!name) {
      return res.status(422).json({ message: "Name is required!" });
    }
    if (!email) {
      return res.status(422).json({ message: "Email is required!" });
    }
    if (password !== confirmPassword) {
      return res.status(422).json({ message: "Passwords do not match" });
    }
    if (!password) {
      return res.status(422).json({ message: "Password is required" });
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res
        .status(422)
        .json({ message: "An account with that email already exists!" });
    }

    try {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const user = new User({
        name,
        email,
        password: passwordHash,
      });

      await user.save();
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res
        .status(500)
        .json({
          message:
            "An error occurred while registering the user, please try again later",
        });
    }
  }
};
