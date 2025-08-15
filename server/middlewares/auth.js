import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.token;

        if (!authHeader) {
            return res.json({ success: false, message: "Unauthorized, Login Again" });
        }

        // "Bearer <token>" case handle
        const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (!tokenDecode?.id) {
            return res.json({ success: false, message: "Unauthorized, Login Again" });
        }

        req.body.userId = tokenDecode.id;
        next();

    } catch (error) {
        console.error("JWT Error:", error.message);
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;
