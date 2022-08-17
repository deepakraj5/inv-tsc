import { injectable } from "inversify";

/**
 * Interface for product
 */
export interface Product {
    id: number
    name: string
}


/**
 * Repository for product api
 */
@injectable()
export class ProductRepo {
    constructor(
        private products: Product[] = [
            { id: 1, name: "tea" },
            { id: 2, name: "coffee" },
            { id: 3, name: "milk" },
            { id: 4, name: "boost" },
        ]
    ) {}

    // list products
    async listProducts(): Promise<Product[]> {
        return this.products;
    }

    // get single product
    async getProduct(id: number): Promise<Product> {
        return this.products.find(product => product.id === id) as Product;
    }
}