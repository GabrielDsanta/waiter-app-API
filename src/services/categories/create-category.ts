import { Request, Response } from "express";
import { Category } from "../../schema/Category";

export async function CreateCategory(req: Request, res: Response){
    const { name, icon } = req.body

    const newCategory = await Category.create({
        icon,
        name
    })

    res.json(newCategory)
}