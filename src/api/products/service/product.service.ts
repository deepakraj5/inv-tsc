import { inject, injectable } from "inversify";
import { Product, ProductRepo } from "../repository/product.repo";

/**
 * Interface for product api
 */
export interface IProductService {
    listProducts(): Promise<Product[]>
    getProduct(id: number): Promise<Product>
}

/**
 * Service for product api
 */
@injectable()
export class ProductService implements IProductService {
    constructor(
        @inject(ProductRepo) private readonly Product: ProductRepo
    ) {}

    // list products
    listProducts(): Promise<Product[]> {
        return this.Product.listProducts();
    }

    // get single product
    getProduct(id: number): Promise<Product> {
        return this.Product.getProduct(id);
    }
}