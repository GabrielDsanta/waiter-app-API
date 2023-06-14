import { Request, Response } from "express";
import { Product } from "../../schema/Product";

export async function ListProducts(req: Request, res: Response){
    const products = await Product.find()
    res.json(products)
}