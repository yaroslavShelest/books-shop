import { SetMetadata } from '@nestjs/common';

export const Roles = (...roleOfUser: string[]) => SetMetadata('roles', roleOfUser);
