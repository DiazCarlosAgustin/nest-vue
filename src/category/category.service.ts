import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  /**
   * 
   * @param createCategoryDto body
   * @returns 
   */
  async create(createCategoryDto: CreateCategoryDto): Promise<any> {
    try {
      return await getRepository(Category)
        .save(createCategoryDto)
        .then(res => {
          return {
            status: "success",
            message: "La categoria se creo correctamente.",
            categoria: res
          }
        })
    } catch (error) {
      return {
        status: "fail",
        message: error
      }
    }
  }

  /**
   * 
   * @returns Categoria
   */
  async findAll(): Promise<Category | any> {
    try {
      return await getRepository(Category)
        .find({ relations: ['parent'] })
        .then(res => {
          return {
            status: "success",
            categorias: res
          }
        })
    } catch (error) {
      return {
        status: "fail",
        message: error
      }
    }
  }

  /**
   * 
   * @param id id de la categoria
   * @returns 
   */
  async findOne(id: number): Promise<Category | any> {
    try {
      return await getRepository(Category)
        .find({
          where: { id: id },
          relations: ['parent']
        })
        .then(res => {
          return {
            status: "success",
            categorias: res
          }
        })
    } catch (error) {
      return {
        status: "fail",
        message: error
      }
    }
  }

  /**
   * 
   * @param id id de la categoria a actualizar
   * @param updateCategoryDto datos a actualizar
   * @returns si se actualizo
   */
  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category | any> {
    let result
    try {
      result = await getRepository(Category)
        .createQueryBuilder("category")
        .update(updateCategoryDto)
        .where("id = :id", { id: id })
        .execute()
        .then(res => {
          if (res.raw.warningStatus == 0 && res.raw.affectedRows > 0) {
            return {
              status: "success",
              message: "Se Actualizo correctamente la categoria."
            }
          }
        })
    } catch (error) {
      return {
        status: "fail",
        message: error
      }
    }
    return result
  }

  /**
   * 
   * @param id id de la categoria a actualizar 
   * @returns si se elimino o no correctamenete
   */
  async remove(id: number): Promise<Category | any> {
    try {
      return await getRepository(Category)
        .createQueryBuilder("category")
        .delete()
        .from(Category)
        .where("id = :id", { id: id })
        .execute()
        .then(res => {
          if (res.raw.warningStatus == 0 && res.raw.affectedRows > 0) {
            return {
              status: "success",
              message: "Se elimino correctamente la categoria."
            }
          }
        })
    } catch (error) {
      return {
        status: "fail",
        message: error
      };

    }
  }
}
