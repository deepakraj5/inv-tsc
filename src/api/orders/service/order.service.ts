import { inject, injectable } from "inversify";
import { Order, OrderRepo } from "../repository/order.repo";

/**
 * Interface for order api
 */
export interface IOrderService {
    listOrder(): Promise<Order[]>
    newOrder(payload: Order): Promise<Order>
}

/**
 * Service for order api
 */
@injectable()
export class OrderService implements IOrderService {
    constructor(
        @inject(OrderRepo) private readonly Order: OrderRepo
    ) {}

    // list orders
    listOrder(): Promise<Order[]> {
        return this.Order.listOrders();
    }

    // new order
    newOrder(payload: Order): Promise<Order> {
        return this.Order.newOrder(payload);
    }
}