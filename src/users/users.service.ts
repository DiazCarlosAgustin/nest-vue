import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {

    return 'This action adds a new user';
  }

  async findAll() {
    let result = {};
    try {
      await getRepository(User)
        .find()
        .then(res => {
          result = {
            status: "Ok",
            message: "Termino correctamente.",
            users: res
          };
        });
    } catch (error) {
      result = {
        status: "Fail",
        message: error
      }
      return result;
    }
    return result;
  }

  async findOne(id: number) {
    let result = {};
    try {
      await getRepository(User)
        .findOne(id)
        .then(res => {
          result = {
            status: "Ok",
            message: "Termino correctamente.",
            users: res
          };
        });
    } catch (error) {
      result = {
        status: "Fail",
        message: error
      }
      return result;
    }
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let result = {};
    try {
      await getRepository(User)
        .createQueryBuilder()
        .update(User)
        .set(updateUserDto)
        .where("id = :id", { id })
        .execute()
        .then(res => {
          result = {
            status: "Ok",
            message: res,
            // users: res
          };
        });
    } catch (error) {
      result = {
        status: "Fail",
        message: error
      }
      return result;
    }
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
