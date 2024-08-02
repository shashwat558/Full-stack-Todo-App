const jwt = require("jsonwebtoken");
const secret = "1a2b3c4dac12";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jwt.verify(token, secret);
            if(decoded.userId){
                req.headers["userid"] = decoded.userId
            }
            next()
        } catch(err) {
            return res.status(500).json({message: "something went wrong"})
        }
    }
}

module.exports = {
    authMiddleware,
    secret
}
