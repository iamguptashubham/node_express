const express = require("express");
const bodyParser = require("body-parser");

const placeRouter = require("./routes/route-places.js")
const userRouter  = require("./routes/route-users.js")

const app  = express();

app.use(bodyParser.urlencoded({extended:false}))


app.use('/api/place', placeRouter);
app.use('/user', userRouter);

app.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message:error.message || "Something went wrong" });
    
});
app.listen(5000);