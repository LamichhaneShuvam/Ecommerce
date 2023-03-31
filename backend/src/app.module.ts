import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { env } from 'process';
import { ProductModule } from './product/product.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: env.DB_HOST,
      username: env.DB_USERNAME,
      port: parseInt(env.DB_PORT),
      password: env.DB_PASSWORD,
      database: env.DATABASE,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
