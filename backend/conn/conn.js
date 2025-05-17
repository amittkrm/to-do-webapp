const  mongoose  = require("mongoose");

const conn= async (req,res) =>{
    try{
        await mongoose.connect("mongodb+srv://amitkumar1630ak:amitkumar12@cluster0.clmuwg8.mongodb.net/")
        .then(()=>{
            console.log("connected to database");
        });
    }catch(e){
        console.log(e)
        // res.status(400).json({
        //     message:"Not Connected",
        // });
    }
    
}
conn();