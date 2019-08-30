import { SetMetadata } from '@nestjs/common';

export const Roles = (...typeOfUser: string[]) => SetMetadata('roles', typeOfUser);
