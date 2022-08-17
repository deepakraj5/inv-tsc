import { injectable } from "inversify";

/**
 * Interface for order
 */
export interface Order {
    product_id: number
    order_count: number
}


/**
 * Order array
 */
const orderRepo: Order[] = []



/**
 * Repository for order api
 */
@injectable()
export class OrderRepo {
    constructor(
        private orders: Order[] = orderRepo
    ) {}

    // list orders
    async listOrders(): Promise<Order[]> {
        return this.orders;
    }

    // new order
    async newOrder(payload: Order): Promise<Order> {
        this.orders.push(payload);
        return payload;
    }
}