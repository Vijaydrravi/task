const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const validate = async (req,res,next)=> {
    try{
        const {mail} = req.body;
        const result = await prisma.user.findFirst({
            where:{
                mail:mail
            },
            select:{
                mail:true
            }
        });
        if(result===null){
            next();
        }else {
            res.status(401).send("User Already taken");
        }
    }catch(err) {
        console.log(err);
        res.status(500).send("server error");
    }
};

module.exports = validate;