import { winstonLogger } from "@src/utils/logger";
import fastify from "fastify";
import 'dotenv/config'
import { connectToDatabase } from "@src/utils/connect";

const app = fastify()
const logger = winstonLogger('Initialize the app', 'info')

const startApp = async () => {

   await connectToDatabase()

   app.get("/", (request, response) => {
      response.send("hello welcome to fastify app")
   })

   app.listen({ port: 3001 }, () => {
      logger.info("🚀 app is listening on port 3001")
   })
}

startApp();