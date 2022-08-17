import { Container } from "inversify";
import { ProductRepo } from "../api/products/repository/product.repo";
import { ProductService } from "../api/products/service/product.service";

import './controllers'
import { TYPES } from "./types";

/**
 * Container for app
 */
export const container = new Container()

container.bind<ProductService>(TYPES.ProductService).to(ProductService)


container.bind(ProductRepo).toSelf()