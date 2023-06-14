import { Request, Response } from "express";
import { Product } from "../../schema/Product";

export async function ListProductsByCategory(req: Request, res: Response){
    const { id } = req.params
    const products = await Product.find().where('category').equals(id)
    res.json(products)
}