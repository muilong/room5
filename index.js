const express = require("express");
const app = express()
const port = process.env.PORT || 8080
app.get("/",(req,res) =>
{
    res.render("index.ejs",{name: "ne Harry", lastname: "potter"});
});

app.listen(port,() => console.log("listen port: ${port}"))
