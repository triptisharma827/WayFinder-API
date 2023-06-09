var express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://TriptiSharma:dHI9tQhjrRY8xDcz@tripticluster0.nzfkopq.mongodb.net/wayFinderDB").then(() => console.log("connected")).catch((err) => console.log(err));
const recordsSchema = new mongoose.Schema({
    _id: String,
    highlights: Array ,
    techStack: Array ,
    blogs:Array ,
    tutorials:Array
  });
  const Records = new mongoose.model("domains", recordsSchema);
var app = express();
var PORT=9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.get('/', function(req, res, next) {
res.send('Welcome to WayFinder API'); 
});
app.post("/",async function(req,res,next){
        try {
          let result = await Records.find({_id:req.body.title})
          if(result.length==0)result=[
            {
              _id: 'error'}];
          res.send(result);
        } catch (err) {
          console.log(err);
      };
   
    });
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));