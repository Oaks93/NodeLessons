const express= require("express")
const app= express()
const port = 3000
const products = [
    { id: 1, name: "Carlos' Pants", price: 2000 },
    { id: 2, name: "Mineral Water", price: 100 },
  ];

app.get("/products", (req, res )=>{
    res.json(products)
} )

app.get("/products/:id",( req, res)=>{
    const filteredProduct= products.find(product=>product.id==req.params.id)
    console.log("array",products);
    console.log("filtered",filteredProduct);
    res.json(filteredProduct)
})

app.get("*", (req, res)=>{
    res.send({message:"hello"})
})
  

app.listen(port,()=>{
    console.log(`server is listening on port, ${port}`);
})