const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, "pharma_secret_key", (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Unauthorized or expired token" });

    req.userId = decoded.id;
    next();
  });
};
