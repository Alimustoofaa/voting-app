import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRoles } from './user-roles.enum';
import { User } from './user.entity';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user);
  }

  matchRoles(grants: string[], user: User) {
    const match = grants.some(grant => grant=== UserRoles[user.roles.toUpperCase()]);
    if (!match) {
        throw new UnauthorizedException()
    }
    return match
  }
}