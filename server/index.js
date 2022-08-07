const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProductModel = require('./models/Products');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://joviisorena:XTzkQVmPnS1M444d@homeqube-cluster1.zjlfyku.mongodb.net/homeqube1?retryWrites=true&w=majority");

//get all product
app.get("/getProducts", (req, res) => {
    ProductModel.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

//get one product
app.get("/getProduct", (req, res) => {
    console.log(req.query.id);
    ProductModel.findById(req.query.id.toString(), (err, result)=>{
        if(err) {
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

app.post("/createProduct", async (req, res) => {
    const product = req.body;
    const newProduct = new ProductModel(product);
    await newProduct.save();

    res.json(product);
});

app.listen(3001, () => {
    console.log("Server running...");
});