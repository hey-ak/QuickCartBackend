import { Router } from "express";
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/product.controler.js";

const router = Router();



router.get("/product/:id",getProduct);
router.get("/product",getAllProducts);
router.post("/product",addProduct);
router.put("/product/:id",updateProduct);
router.delete("/product/:id",deleteProduct);



export default router;






