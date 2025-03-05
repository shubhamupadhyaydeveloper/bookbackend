import mongoose from "mongoose";
import { winstonLogger } from "./logger";
import { config } from "./config";

const logger = winstonLogger("Database connect", 'debug')

export const connectToDatabase = async () => {
    try {
        const isConnected = await mongoose.connect(config.MONGODB_URL!)
        if (isConnected) {
            logger.info('🚀 database is connected')
        }
    } catch (error: any) {
        logger.error(error.message)
    }
}