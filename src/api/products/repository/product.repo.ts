import { injectable } from "inversify";

/**
 * Interface for product
 */
export interface Product {
    id: number
    name: string
}


/**
 * Product array
 */
const productsRepo: Product[] = [
    { id: 1, name: "tea" },
    { id: 2, name: "coffee" },
    { id: 3, name: "milk" },
    { id: 4, name: "boost" },
]



/**
 * Repository for product api
 */
@injectable()
export class ProductRepo {
    constructor(
        private products: Product[] = productsRepo
    ) {}

    // list products
    async listProducts(): Promise<Product[]> {
        return this.products;
    }

    // get single product
    async getProduct(id: number): Promise<Product> {
        return this.products.find(product => product.id === id) as Product;
    }

    // new product
    async newProduct(payload: Product): Promise<Product> {
        const product: Product = payload;
        this.products.push(product);
        return product;
    }

    // delete product
    async deleteProduct(id: number): Promise<string> {
        const ObjIndex = this.products.findIndex(product => product.id === id);
        this.products.splice(ObjIndex, 1);
        return "deleted";
    }
}