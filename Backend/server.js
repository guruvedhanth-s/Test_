require("dotenv").config()
const express=require("express")
const mongoose =require("mongoose")
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())

app.get("/get",()=>{
    console.log("Success")
})


const dataSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    }
});

const DataModel = mongoose.model("DataModel", dataSchema);

app.post("/post", (req, res) => {
    const newData = new DataModel(req.body);

    newData.save()
        .then(() => {
            res.status(201).send("Data saved successfully");
        })
        .catch((error) => {
            res.status(500).send("Error saving data: " + error.message);
        });
});
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is running")
    })
})
.catch((error)=>{
    console.log(error)
})
