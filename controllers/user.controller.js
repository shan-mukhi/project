import { asyncHandler } from "../utils/asyncHandler.js";
//async handler is a higher order function which accepts a function as parameter and also returns a function
//here it is accepting the async function as parameter which is sending a json response with a status code of 200
const registerUser =  asyncHandler( async(req,res)=>{
res.status(200).json({
    message:'ok'
})
})     
export {registerUser}                