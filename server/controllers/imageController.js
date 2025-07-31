// import userModel from '../models/userModel.js'
// import FormData from 'form-data'
// import axios from "axios"
//  export const generateImage=async(req,res)=>{
//     try{
//         const {userId, prompt} = req.body

//         const user=await userModel.findById(userId)

//         if(!user || !prompt){
//             return res.json({success:false, message:'Missing details'})     
//         }
//         if(user.creditBalance===0 || userModel.creditBalance<0){
//             return res.json({success:false, message:'No Credit Balance',
//                 creditBalance:user.creditBalance
//             })
//         }
//         const formData= new FormData()
//         formData.append('prompt',prompt) 
//         const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',
//             formData, {headers: {
//                 'x-api-key': process.env.CLIPDROP_API,
//             },
//             responseType:'arraybuffer'
//         })
//         const base64Image= Buffer.from(data, 'binary').toString('base64')
//         const resultImage=`data:image/png;base64,${base64Image}`
//         await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance - 1})

//         res.json({success:true, message:"Image Generated",creditBalance: user.creditBalance-1, resultImage})
        


//     }catch(error){
//         console.log(error.message)
//         res.json({success: false, message:error.message})
//     }
// }

import userModel from '../models/userModel.js'
import FormData from 'form-data'
import axios from "axios"

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body

        const user = await userModel.findById(userId)

        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing details' })
        }

        if (user.creditBalance === 0 || user.creditBalance < 0) {
            return res.json({
                success: false,
                message: 'No Credit Balance',
                creditBalance: user.creditBalance
            })
        }

        const formData = new FormData()
        formData.append('prompt', prompt)

        // ✅ FIXED: Proper headers including multipart/form-data
        const headers = {
            'x-api-key': process.env.CLIPDROP_API, // 🔁 make sure your .env key matches this name
            ...formData.getHeaders()               // ✅ include multipart/form-data headers
        }

        // ✅ FIXED: Added headers and kept responseType
        const { data } = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formData,
            {
                headers,
                responseType: 'arraybuffer'
            }
        )

        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:image/png;base64,${base64Image}`

        // ✅ Deduct one credit after success
        await userModel.findByIdAndUpdate(user._id, {
            creditBalance: user.creditBalance - 1
        })

        res.json({
            success: true,
            message: "Image Generated",
            creditBalance: user.creditBalance - 1,
            resultImage
        })

    } catch (error) {
    let apiError = ''

    // ✅ Convert binary buffer (like ClipDrop's 402) to readable text
    if (error.response?.data instanceof Buffer) {
        apiError = error.response.data.toString('utf-8')
    }

    console.error('ClipDrop API ERROR:', {
        status: error.response?.status,
        data: apiError,
        message: error.message
    })

    res.status(error.response?.status || 500).json({
        success: false,
        message: 'ClipDrop API failed',
        details: apiError || error.message
    })
}

}
