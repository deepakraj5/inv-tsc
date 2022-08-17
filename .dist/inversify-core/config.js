"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const product_repo_1 = require("../api/products/repository/product.repo");
const product_service_1 = require("../api/products/service/product.service");
require("./controllers");
const types_1 = require("./types");
/**
 * Container for app
 */
exports.container = new inversify_1.Container();
exports.container.bind(types_1.TYPES.ProductService).to(product_service_1.ProductService);
exports.container.bind(product_repo_1.ProductRepo).toSelf();
