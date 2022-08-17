import { Request } from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost } from "inversify-express-utils";
import { TYPES } from "../../../inversify-core/types";
import { Order } from "../repository/order.repo";
import { IOrderService } from "../service/order.service";

/**
 * Controller for order api
 * use http://localhost:5000/orders
 */
@controller("/orders")
export class OrderController {

    constructor(
        @inject(TYPES.OrderService) private readonly orderService: IOrderService
    ) {}

    @httpGet("/")
    async listOrders(): Promise<Order[]> {
        return this.orderService.listOrder();
    }

    @httpPost("/")
    async newOrder(req: Request): Promise<Order> {
        const payload: Order = req.body
        return this.orderService.newOrder(payload);
    }
}