import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UsersService {
  async hashPassword(password: string): Promise<string> {
    const salt = 10
    return await bcrypt.hash(password, salt)
  }

  async create(createUserDto: CreateUserDto): Promise<Object> {
    let result = {};
    createUserDto.password = await this.hashPassword(createUserDto.password)
    try {
      await getRepository(User)
        .save(createUserDto)
        .then(res => {
          result = {
            status: 200,
            message: "Termino correctamente.",
            users: res
          };
        })
    } catch (error) {
      result = {
        status: 400,
        message: error
      }
      return result;
    }
    return result;
  }

  async findAll(): Promise<Object> {
    let result = {};
    try {
      await getRepository(User)
        .find()
        .then(res => {
          result = {
            status: 200,
            message: "Termino correctamente.",
            users: res
          };
        });
    } catch (error) {
      result = {
        status: 400,
        message: error
      }
      return result;
    }
    return result;
  }

  async findOne(id: number): Promise<Object> {
    let result = {};
    try {
      await getRepository(User)
        .findOne(id)
        .then(res => {
          result = {
            status: 200,
            message: "Termino correctamente.",
            users: res
          };
        });
    } catch (error) {
      result = {
        status: 400,
        message: error
      }
      return result;
    }
    return result;
  }
  async findByEmail(email: string): Promise<Object> {
    let result = {};
    try {
      await getRepository(User)
        .findOne({ email: email })
        .then(res => {
          result = {
            status: 200,
            message: "Termino correctamente.",
            user: res
          };
        });
    } catch (error) {
      result = {
        status: 400,
        message: error
      }
      return result;
    }
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Object> {
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
            status: 200,
            message: res,
            // users: res
          };
        });
    } catch (error) {
      result = {
        status: 400,
        message: error
      }
      return result;
    }
    return result;
  }

  async remove(id: number): Promise<Object> {
    let result = {};
    try {
      await getRepository(User)
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id })
        .execute()
        .then(res => {
          result = {
            status: 200,
            message: res,
            // users: res
          };
        });
    } catch (error) {
      result = {
        status: 400,
        message: error
      }
      return result;
    }
    return result;
  }
}
