import { Request, Response } from "express";
import { Product } from "../../schema/Product";

export async function CreateProducts(req: Request, res: Response) {
    const imagePath = req.file?.filename
    const {
        category,
        description,
        ingredients,
        name,
        price
    } = req.body

    const newProduct = await Product.create({
        category,
        description,
        ingredients: ingredients ? JSON.parse(ingredients) : [],
        name,
        price: Number(price),
        imagePath
    })

    res.status(201).json(newProduct)
}