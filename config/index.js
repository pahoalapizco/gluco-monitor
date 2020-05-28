require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV ? false : true,
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  authJwtSecret: process.env.AUTH_JWT_SECRET
}

module.exports = { config };
