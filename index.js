const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv")
const path=require("path")
//dotenv configration
dotenv.config()

//rest object
const app=express();

//middleware
app.use(cors());
app.use(express.json());

//static pathh

app.use(express.static(path.join(__dirname,"./client/build")))


//routes
app.use("/Email",require("./routes/portfolioRoutes"))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname ,"./client/build/index.html"))
})
//ports
const PORT= 3000


//listen

app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})