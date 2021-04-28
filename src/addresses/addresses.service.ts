import { Injectable } from '@nestjs/common';
import { Address } from './entities/address.entity';
import { getRepository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesService {
  async create(createAddressDto: CreateAddressDto): Promise<Address | any> {
    try {
      return await getRepository(Address)
        .save(createAddressDto)
        .then(res => {
          return {
            status: "Ok",
            message: "La direccion se creo correctamente",
            address: res
          }
        })
    } catch (error) {

    }
  }
  /**
   * 
   * @returns 
   */
  async findAll(): Promise<Address | any> {
    try {
      return await getRepository(Address).find({ relations: ["ser"] })
        .then(res => {
          return {
            status: "Ok",
            message: "Termino correctamente.",
            address: res
          }
        })
    } catch (error) {
      return {
        status: "Fail",
        message: error
      }
    }
  }
  /**
   * 
   * @param id id address que necesito
   * @returns 
   */
  async findOne(id: number): Promise<Address | any> {
    try {
      return await getRepository(Address)
        .find({
          where: { id: id },
          relations: ["user"]
        })
        .then(res => {
          return {
            status: "Ok",
            message: "Termino correctamente.",
            address: res
          }
        })
    } catch (error) {
      return {
        status: 400,
        message: error
      }
    }
  }
  /**
   * 
   * @param id id address para actualizar 
   * @param updateAdressDto body para actualizar
   * @returns 
   */
  async update(id: number, updateAdressDto: UpdateAddressDto): Promise<any> {
    try {
      return await getRepository(Address)
        .createQueryBuilder("address")
        .update(Address)
        .set(updateAdressDto)
        .where("id = :id", { id })
        .execute()
        .then(res => {
          return {
            status: "Ok",
            message: res
          }
        })
    } catch (error) {
      return {
        status: 400,
        message: error
      }
    }
  }

  /**
   * 
   * @param id id de la direccion a eliminar
   * @returns 
   */
  async remove(id: number): Promise<any> {
    try {
      return await getRepository(Address)
        .createQueryBuilder("address")
        .delete()
        .from(Address)
        .where("id = :id", { id })
        .execute()
        .then(res => {
          return {
            status: "Ok",
            message: res
          }
        })
    } catch (error) {
      return {
        status: 400,
        message: error
      }
    }
  }
}
