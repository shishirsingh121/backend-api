const app = require("express")();
const Blog= require("./model/blogmodel")
// const mangoose=require("mangoose");
const { connectdatabase } = require("./database/database");
connectdatabase()

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message:"success"
    })
})
app.post("/blogs",async(req,res)=>{
    const title=req.body.title;
      const  subtitle=req.body.subtitle;
       const description=req.body.description;
   await Blog.create({
        title,
        subtitle,
        description
    })
    res.json({
        status: 201,
        message:"hello i am in blogs"

    })
})





app.listen(2000,(req,res)=>{
    console.log("its port is 2000")
})