import dotenv from 'dotenv';

dotenv.config();

class Config {
    public MONGODB_URL: string | undefined;
    public ACCESS_TOKEN_SECRET: string | undefined;
    public REFRESH_TOKEN_SECRET: string | undefined;

    constructor() {
        this.MONGODB_URL = process.env.MONGO_URI;
        this.ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
        this.REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET
    }
}
export const config: Config = new Config();