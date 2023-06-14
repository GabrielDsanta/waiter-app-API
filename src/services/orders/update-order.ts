import { Request, Response } from "express";
import { Order } from "../../schema/Order";

export async function UpdateOrder(req: Request, res: Response) {
    const { id } = req.params
    const { status } = req.body

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
        return res.status(400).json({
            error: 'Status should be one of these: WAITING, IN_PRODUCTION or DONE'
        })
    }

    await Order.findByIdAndUpdate(id, {
        status
    })

    res.sendStatus(204)
}