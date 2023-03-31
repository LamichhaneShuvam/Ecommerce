import { Injectable } from '@nestjs/common';
import sequelize, { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ProductService {
  constructor(private readonly sequelize: Sequelize) {}
  getAll() {
    const selectQuery = `SELECT * FROM product`;
    return this.sequelize.query(selectQuery, {
      type: QueryTypes.SELECT,
    });
  }
}
