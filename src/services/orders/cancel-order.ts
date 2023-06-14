import { Request, Response } from "express";
import { Order } from "../../schema/Order";

export async function CancelOrder(req: Request, res: Response) {
    const { id } = req.params
    await Order.findByIdAndDelete(id)
    res.sendStatus(204)
}