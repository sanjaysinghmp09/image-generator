import jwt from 'jsonwebtoken';


const userAuth = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Unauthorized, Login Again" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
            req.body.userName = tokenDecode.name;
            console.log("User ID:", req.body.userId);
            console.log("User Name:", req.body.userName);

        } else {
            return res.json({ success: false, message: "Unauthorized, Login Again" });
        }
        next()

    } catch (error) {
        res.json({ success: false, message: "Internal server error" });
    }
}

export default userAuth;