const express = require('express');
const app = express();
app.get('/',(req, res)=>{
    res.render("sample");
    console.log("something")
});
app.listen(3001,()=>{
    console.log("200 ok")
});