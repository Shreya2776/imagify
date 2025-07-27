import {registerUser, loginUser, userCredits, purchaseCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'
import express from 'express'
const userRouter=express.Router()
userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,userCredits)
userRouter.post('/purchase-credits',userAuth,purchaseCredits)
export default userRouter
//http://localhost:4000/api/user/register
//http://localhost:4000/api/user/login
