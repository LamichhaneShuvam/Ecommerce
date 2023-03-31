import { Injectable, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private readonly sequelize: Sequelize) {
    this.sequelize
      .authenticate()
      .then(() => {
        Logger.log('Connection created with database', 'Sequelize');
      })
      .catch((reason) => {
        Logger.error(reason, 'Sequelize');
      });
  }
}
