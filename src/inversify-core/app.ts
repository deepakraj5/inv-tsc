import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./config";
import express from 'express'
import dotenv from 'dotenv'
import logger from 'npmlog'

dotenv.config()

export class App {

    async start() {
        const server = new InversifyExpressServer(container)

        server.setConfig(app => {
            app.use(express.json())
        })

        const app = server.build()
        
        // port
        const PORT = process.env.POR || 5000

        app.listen(PORT, () => logger.info(`Server`, `server upon port ${PORT}`))
    }

}