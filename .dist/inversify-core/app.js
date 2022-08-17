"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const npmlog_1 = __importDefault(require("npmlog"));
dotenv_1.default.config();
class App {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const server = new inversify_express_utils_1.InversifyExpressServer(config_1.container);
            server.setConfig(app => {
                app.use(express_1.default.json());
            });
            const app = server.build();
            // port
            const PORT = process.env.POR || 5000;
            app.listen(PORT, () => npmlog_1.default.info(`Server`, `server upon port ${PORT}`));
        });
    }
}
exports.App = App;
