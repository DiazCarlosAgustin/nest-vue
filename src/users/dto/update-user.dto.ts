import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// Con PartialType se extiende de manera abstracta 
export class UpdateUserDto extends PartialType(CreateUserDto) {
    
}
