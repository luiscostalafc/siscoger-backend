module.exports = {
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  synchronize: true,
  entities: [
    "entity/*.js", 
    "modules/**/entity/*.js"
  ],
  migrations: [
    "migration/*.js", 
    "modules/**/migration/*.js"
  ],
  cli: {
    entitiesDir: "src/database/entity",
    migrationsDir: "src/database/migration",
    subscribersDir: "src/database/subscriber"
  }
}