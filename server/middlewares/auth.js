// import jwt from 'jsonwebtoken'
// //executed whenever we hit the API
// const userAuth=async(req,res,next)=>{
//     const{token}=req.headers;
//     if(!token){
//         return res.json({success:'false', message:'Not Authorized. Login Again'})
//     }
//     try{
//         const tokenDecode= jwt.verify(token, process.env.JWT_SECRET);

//         if(tokenDecode.id){
//             req.body.userId=tokenDecode.id;
//         }else{
//             return res.json({success:'false',message:'Not Authorized. Login Again'})
//         }
//         next();
//     } catch(error){
//         res.json({success:'false', message: error.message })
//     }
// };
// export default userAuth;


import jwt from 'jsonwebtoken';

// ✅ Middleware to verify token and extract userId
const userAuth = async (req, res, next) => {
    // ✅ Extract token from custom header named 'token'
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        // ✅ Decode and verify JWT using secret key
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            // ✅ Fix: Ensure req.body exists before assigning userId
            req.body = req.body || {};  // prevents error when body is undefined

            // ✅ Set userId in req.body so your controller can access it
            req.body.userId = tokenDecode.id;

            next();
        } else {
            return res.json({ success: false, message: 'Not Authorized. Login Again' });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;
