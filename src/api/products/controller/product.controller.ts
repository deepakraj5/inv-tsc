import { Request } from "express";
import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost } from "inversify-express-utils";
import { TYPES } from "../../../inversify-core/types";
import { Product } from "../repository/product.repo";
import { IProductService, ProductService } from "../service/product.service";

/**
 * Controller for product api
 * use http://localhost:5000/product
 */
@controller("/product")
export class ProductController {

    constructor(
        @inject(TYPES.ProductService) private readonly productService: IProductService
    ) {}

    @httpGet("/")
    async listProducts(): Promise<Product[]> {
        return this.productService.listProducts();
    }

    @httpGet("/:id")
    async getProduct(req: Request): Promise<Product> {
        const id: number = parseInt(req.params.id)
        return this.productService.getProduct(id);
    }

    @httpPost("/")
    async newPRoduct(req: Request): Promise<Product> {
        const payload: Product = req.body
        return this.productService.newProduct(payload);
    }

    @httpDelete("/:id")
    async deleteProduct(req: Request): Promise<string> {
        const id: number = parseInt(req.params.id);
        return this.productService.deleteProduct(id);
    }

}