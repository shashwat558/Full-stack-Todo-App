const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({
                message: "Please provide all data asked"
            })
        }
    }
}
