import express from 'express'
import books from '../model/bookschema.js';

const router = express.Router();


router.post("/add", async(req,res)=>{
    try {
        const newProduct = new books(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
})

router.get("/search",async(req,res)=>{

    const searchInput = req.query.search;

  try {
    
    const searchResults = await books.find({ title: { $regex: new RegExp(searchInput, 'i') } });

    res.status(200).json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
})

router.get("/all",async(req,res)=>{

    try {
        const products = await books.find();
        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/business", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Business"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/fiction", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Fiction"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/mystery", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Mystery"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/motivational", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Motivational"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

router.get("/fantasy", async(req,res)=>{
   

    try {
        const productscat = await books.find({category:"Fantasy"});
        res.status(200).json(productscat); 
    } catch (error) {
        res.status(500).json({ error: "An error occurred" })      
    }
})

export default router;