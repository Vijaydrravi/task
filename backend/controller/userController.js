const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const login = async(req,res)=>{
    try{
        const {mail,password} = req.body;
        const result = await prisma.user.findFirst({
            where:{
                mail:mail
            },
            select:{
                password:true
            }
        });
        if(result===null) {
            res.status(401).send("user doesn't exist");
        }
        if(password.toString() !== result.password) {
            res.status(401).send("wrong password");
        }
        const token = jwt.sign(password,"secret");
        
        res.status(200).json({token});
    }catch(err){
        console.log(err);
        res.status(500).send("server error");
    }
}

const signup = async (req,res)=>{
    try {
        const {mail,password} = req.body;
        await prisma.user.create({
            data:{
                mail:mail,
                password:`${password}`
            }
        });
        res.status(200).send("user added");
    }catch(err) {
        console.log(err);
        res.status(500).send("server error");
    }
}

module.exports={login,signup};