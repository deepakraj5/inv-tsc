import { Container } from "inversify";
import { OrderRepo } from "../api/orders/repository/order.repo";
import { IOrderService, OrderService } from "../api/orders/service/order.service";
import { ProductRepo } from "../api/products/repository/product.repo";
import { IProductService, ProductService } from "../api/products/service/product.service";

import './controllers'
import { TYPES } from "./types";

/**
 * Container for app
 */
export const container = new Container()

container.bind<IProductService>(TYPES.ProductService).to(ProductService)
container.bind<IOrderService>(TYPES.OrderService).to(OrderService)


container.bind(ProductRepo).toSelf()
container.bind(OrderRepo).toSelf()