import dotenv from 'dotenv';
import path from 'path';

const __dirname = path.resolve(process.cwd());
dotenv.config({ path: path.join(__dirname, '.env') });

const environments = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dirname: __dirname,
  jwt: {
    secret: process.env.JWT_SECRET_KEY || '24E1D9EB365FEB13DAF4397A322BF',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  },
  database: {
    client: process.env.DATABASE_CLIENT || 'mysql',
    mysql: {
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USERNAME || 'admin',
      password: process.env.DATABASE_PASSWORD || 'password',
      database: process.env.DATABASE_NAME || 'test'
    }
  }
};


export default environments;