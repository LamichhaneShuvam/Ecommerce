import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(Sequelize) private readonly sequelize: Sequelize) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    Logger.log("Here", "AUTH GUARD");
    
    return true;
  }
}
