import { Request, Response } from "express";
import { Order } from "../../schema/Order";

export async function CreateOrder(req: Request, res: Response){
    const { table, products } = req.body

    const newOrder = await Order.create({
        table, 
        products
    })

    res.json(newOrder)
}