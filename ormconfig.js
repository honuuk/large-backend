module.exports = {
  type: 'postgres',
  url: process.env.DB_URL,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  // migrations: ['dist/migrations/*.js'],
  // migrationsRun: true,
};
