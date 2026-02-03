import dotenv from 'dotenv';
dotenv.config();

export const config = {
  server: {
    port: process.env.PORT || 3001,
  },
  database: {
    server: process.env.DB_SERVER,
    name: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    domain: process.env.DB_DOMAIN,
  },
  auth: {
    // Aquí van JWT o API keys que se vayan a implementar en un futuro
    user: process.env.AUTH_USER || 'admin',
    pass: process.env.AUTH_PASS || 'secret'
  }
};


if (!config.database.server) {
  throw new Error("❌ CRÍTICO: La variable DB_SERVER no está definida en el .env");
}
if (!config.database.name) {
  throw new Error("❌ CRÍTICO: La variable DB_DATABASE no está definida en el .env");
}
if (!config.database.user) {
  throw new Error("❌ CRÍTICO: La variable DB_USER no está definida en el .env");
}
if (!config.database.password) {
  throw new Error("❌ CRÍTICO: La variable DB_PASSWORD no está definida en el .env");
}
if (!config.database.domain) {
  throw new Error("❌ CRÍTICO: La variable DB_DOMAIN no está definida en el .env");
}