const User = require("../models/user")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = class LoginController {
    static async login(req, res) {
        const {email, password} = req.body;

        if(!email) {
            return res.status(422).json({message: "the email is required" })
        }

        
        if(!password) {
            return res.status(422).json({message: "the password is required" })
        }

        let user = null;

        try {
            user = await User.findOne({email: email})
        } catch(error){
            console.error(error)
            res.send("error", error)
        }

        if(!user){
            res.status(404).json({message: "User not found!"})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword) {
            return res.status(422).json({message: "invalid password!"})
        }
        try{
            const secret = process.env.SECRET;
            const token = jwt.sign({id: user._id}, secret)
                res.status(200).json({message:"authentication completed successfully", token})
            } catch(error) {
                    console.error(error)
                    res.status(500).json({message: "an error occurred when performing authentication!"})
            }
    }
}