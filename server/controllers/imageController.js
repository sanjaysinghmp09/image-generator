import userModel from "../models/userModel";
import FormData from "form-data";

export const generateImage = async (req, res) => {
    try {

        const {userId, prompt} = req.body;

        const user = await userModel.findById(userId);

        if(!user || !prompt) {
            return res.json({ success: false, message: "User not found or prompt is missing" });
        }

        if(user.creditBalance === 0 || userModel.creditBalance < 0 ) {
            return res.json({ success: false , message: "Insufficient credit balance" , creditBalance: user.creditBalance });
        }

        const formData = new FormData()
        formData.append('prompt', prompt);
        




    } catch(error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
    }
}