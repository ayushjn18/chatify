import "dotenv/config";


export const ENV={
    PORT : process.env.PORT || 3000,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    NODE_ENV : process.env.NODE_ENV,
    CLIENT_URL : process.env.CLIENT_URL,
    RESEND_API_KEY:process.env.RESEND_API_KEY,
    EMAIL_FROM:process.env.EMAIL_FROM,
    EMAIL_FROM_NAME:process.env.EMAIL_FROM_NAME,
    CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,

    ARCJET_KEY:process.env.ARCJET_KEY,
    ARCJET_ENV:process.env.ARCJET_ENV,
   

};
console.log("ENV TEST:", process.env.CLOUDINARY_API_KEY);

/*PORT=5000
MONGO_URI=mongodb+srv://sandeepsahumech227_db_user:Io7oxIfx7tsxSIDR@cluster0.f4olych.mongodb.net/?appName=Cluster0
NODE_ENV=development
JWT_SECRET=myjwtsecret

RESEND_API_KEY=re_YfcFScNr_7UiadmLXALPHmjuGtxiR3htY

EMAIL_FROM="onboarding@resend.dev"
EMAIL_FROM_NAME="AYUSH JAIN"

CLIENT_URL=http://localhost:5173
*/