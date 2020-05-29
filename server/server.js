let http=require('http')
let express=require('express');
let port=process.env.PORT || 5000;
let app=express();

let cors=require('cors');


app.use(cors());






http.createServer(app).listen(port);

console.log("Backend running on port ",port)