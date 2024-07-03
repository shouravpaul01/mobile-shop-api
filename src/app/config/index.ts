import dotenv from 'dotenv'

dotenv.config()

export default{
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    cloud_name:process.env.ClOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
}