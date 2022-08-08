const express = require("express");
const { getAllproducts,createProduct, updateProducts, deleteProducts, getproductsdetail } = require("../controller/productcontroller");
const router = express.Router();


//we will build route here and export 

router.route("/products").get(getAllproducts);
//route for creating new product 
router.route("/product/new").post(createProduct);

//now for update  // delete // get singe product detail 
router.route("/product/:id").put(updateProducts).delete(deleteProducts).get(getproductsdetail);

//delete product 



module.exports = router