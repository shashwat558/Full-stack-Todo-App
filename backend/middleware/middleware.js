const jwt = require("jsonwebtoken");
const secret = "1a2b3c4dac12";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      try {
        const decoded = jwt.verify(token, secret);
        if (decoded) {
          req.headers["userid"] = decoded.id; 
        }
        next();
      } catch (err) {
        return res.status(500).json({ message: "Something went wrong" });
      }
    } else {
      return res.status(401).json({ message: "Authorization token missing" });
    }
  };
  
module.exports = {
    authMiddleware,
    secret
}

