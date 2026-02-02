const express=require("express")
const todoRoute=require('./router/todoRouter')
const app=express();
app.use(express.json())
app.use("/api/todo",todoRoute)
app.listen(3000,()=>{
    console.log(`Server running on http://localhost:${3000}`)

})
// app.get("/",(req,res)=>{
//     res.send("Get Route is working")

// })
// app.post("/create",(req,res)=>{
//     res.json({
//         message:"Post Route is working"
//     })
// })
// app.put("/",(req,res)=>{
//     res.status(200).json({
//         message:"Put Route is working"
//     })
// })
// app.delete("/",(req,res)=>{
//     res.status(200).json({
//         message:"Delete Route is working"
//     })
// })
app.listen(3000,()=>{
    console.log(`Server running on http://localhost:${3000}`)

})