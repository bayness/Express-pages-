const express = require('express')
const { json } = require("express");
const { checkDate } = require("./CheckDate");


const app = express()
// const { checkDate } = require("./checkDate");



// app.set('view engine', 'ejs')



//not sure what this does.
app.use(express.static(__dirname + "/public"));

//json middleware
app.use(json());

//date check middleware
app.use(checkDate);

//index.html page
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/index.html");
});

//contact us page
app.get("/Contact-Us", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/contact.html");
});

//our services page
app.get("/Services", (req, res) => {
  res.status(200).sendFile(__dirname + "/view/ourServices.html");
});

app.listen(port, () => {
  console.log(`live on http://localhost:3000`);
});




