const Product = require("../model/productmodel");


//create a product --admin 
exports.createProduct = async(req,res,next)=>{
    const product =  await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })

}

//get all the product 
exports.getAllproducts = async(req,res)=>{
    const products = await Product.find()

    //res.status(200).json({message:"Routes is working fine "})
    res.status(201).json({
        success:true,
        products
    })
}

//get single product detail 
exports.getproductsdetail = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product is not found "
        })
    }
    res.status(200).json({
        success:true,
        product
    });



}


//update the product --admin
exports.updateProducts = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product is not found "
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false});

    res.status(200).json({
        success:true,
        product
    });

}


//delete a product 
exports.deleteProducts = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product is not found "
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product delete successfully . "
    });

}