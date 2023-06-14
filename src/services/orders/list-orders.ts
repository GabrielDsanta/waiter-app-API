import { Request, Response } from "express";
import { Order } from "../../schema/Order";

export async function ListOrders(req: Request, res: Response){
    const orders = await Order.find().sort({ craatedAt: 1 }).populate('products.product')
    res.json(orders)
}