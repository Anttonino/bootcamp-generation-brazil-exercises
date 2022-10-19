import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm"
import { HttpException } from "@nestjs/common/exceptions";
import { HttpStatus } from "@nestjs/common/enums";

import { Categories } from "../entities/categories.entity";
import { DeleteResult, ILike } from "typeorm";


@Injectable ()
export class CategoriesService {
    constructor (
        @InjectRepository (Categories)
        private categoriesRepository: Repository<Categories>
    ) { }

    async findAll (): Promise <Categories[]> {
        return await this.categoriesRepository.find({
            relations:{product: true}
        });
    }

    async findById(id: number): Promise<Categories> {
        let categories = await this.categoriesRepository.findOne({
            where: {id}, 
            relations:{product: true}
        });
    if (!categories)
        throw new HttpException('Categories not found!', HttpStatus.NOT_FOUND);
    
    return categories;
    }

    async findByCatName (categories_name: string): Promise<Categories[]> {
        return await this.categoriesRepository.find({
            where: {categories_name: ILike(`%${categories_name}%`)},
            relations: {product: true}
        })
    }
    
    async create (categories: Categories): Promise <Categories> {
        return await this.categoriesRepository.save(categories);
    }
    
    async update (categories: Categories): Promise<Categories> {
        let searchCategories: Categories = await this.findById(categories.id);

        if (!searchCategories || !categories.id)
            throw new HttpException ('Categorie not found!', HttpStatus.NOT_FOUND);
        return await this.categoriesRepository.save(categories);
    }
    
    async delete (id: number): Promise<DeleteResult> {
        let searchCategories = await this.findById(id);

        if (!searchCategories)
            throw new HttpException('Categorie not found!', HttpStatus.NOT_FOUND);
        return await this.categoriesRepository.delete(id);
    }
}