const express=require("express");
const {sequelize,User1}=require("./models");

const app=express();

app.use(express.json());
app.get("/users", async (req,res)=>
{
    const users=await User1.findAll();
    return res.status(200).json(users);
})
app.post("/users", async (req,res)=>
{
    const {firstname,lastname,age}=req.body;
    try{
    const users=await User1.create({firstname,lastname,age});
    return res.status(200).json(users);
    }
    catch(e)
    {
        return res.status(500).json({"message": e});
    }
})
app.get("/users/:userid", async (req,res)=>
{
    const id=req.params.userid;
    const users=await User1.findOne({userId: id});
    return res.status(200).json(users);
})
const PORT=5000;
app.listen({port:PORT},async() =>
{
    console.log(`server started at ${PORT}`)
    try{
    await sequelize.sync({force:true});
    }
    catch(e)
    {
        console.log(e);
    }
    
})