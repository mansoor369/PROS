import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
// import router from './routes/Userroute.js';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',  // Replace with the actual origin of your React app
    credentials: true,
  }))
app.use(express.json());
app.use(bodyParser.json());


const PORT = 4000;
 
const userSchema = new mongoose.Schema({  //created the moongoose schema
    
    Name: {
        type: String,
        required: true,  // This field is mandatory
        trim: true       // Trims whitespace from the end of a string
    },
    Email: {
        type: String,
        required: true,
        trim: true,    // Ensures email addresses are unique in the database
        lowercase: true,
        unique:true // Converts email to lowercase
        // You can also add regex for email validation here
    },
    Phone: {
        type: String,    // Using String to accommodate different phone number formats
        required: true,
        trim: true,
        unique: true
        // You can add validation for phone number format if needed
    },
    Date: {
        type: String,
        required: true,
        // You can set a default value, e.g., the current date
       
    }
});

// Create a model from the schema
const Userschema = mongoose.model('User', userSchema);


 const create =  async (req,res) =>{   //Create method for creating or saving data
    try {
        const userData = new Userschema(req.body);
        if(!userData){
            return res.status(404).json({msg:"Data not found"});
        }
        
        const saveData = await userData.save();
        res.status(200).json(saveData);

    } catch (error) {
            res.status(500).json({error:error});        
    }
}


const get =  async(req,res)=>{
    try {
        const userData = await Userschema.find();
        
        if(!userData){
            res.status(404).json({msg:"data not found"})
        }
        res.status(200).json(userData); 
    } catch (error) {
        res.status(500).json({error:error});        
}

}

const getone = async (req,res)=>{
    try {
        const id = req.params.id;
        const User = await Userschema.findById(id);
        if(!User){
            res.status(404).json({msg:"User not found"})
        }
        res.status(200).json(User);  

    } catch (error) {
        res.status(500).json({error:error});        
}
}

const update = async (req,res)=>{
    try {
        const id = req.params.id;
       const  userExist = await Userschema.findById(id);
        if(!userExist){
            res.status(404).json({msg:"User not found"})
        }
        
        const user = await Userschema.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const Delete = async (req,res)=>{
            try {
                const id = req.params.id;
                const userExist = await Userschema.findByIdAndDelete(id);
            if(!userExist){
                res.status(404).json({msg:"User not found"})
            }
             res.json({msg:`${req.name} Deleted Succesfully`})

            } catch (error) {
                res.status(500).json({error:error});
            }
        }

const router  = express.Router();  //enable the express router

router.post("/create",create);    //define endpoints for the post method
router.get("/Get",get)
router.get("/getone/:id",getone)
router.put("/update/:id",update);
router.delete("/delete/:id",Delete)
mongoose.connect("mongodb://127.0.0.1:27017/CRUD").then(()=>{
    console.log("DB Connected")
    app.listen(PORT,()=>{
        console.log(`Server is listening on PORT :${PORT}`);
    })


    app.use("/api",router);  //the main endpoint for all the methods to execute.


}).catch((error)=>{
        console.log(error);
})