const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.json());
const FILE = "./books.json";
app.get("/books", (req,res)=>res.json(JSON.parse(fs.readFileSync(FILE))));
app.post("/books",(req,res)=>{
 const books=JSON.parse(fs.readFileSync(FILE));
 const newBook={id:books.length+1,title:req.body.title,author:req.body.author};
 books.push(newBook);
 fs.writeFileSync(FILE,JSON.stringify(books,null,2));
 res.json(newBook);
});
app.listen(3000);