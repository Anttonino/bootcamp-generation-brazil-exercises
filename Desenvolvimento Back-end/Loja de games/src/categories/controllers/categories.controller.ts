import { HttpStatus, Controller, Get, HttpCode } from "@nestjs/common";
import { Body, Delete, Param, Post, Put } from "@nestjs/common/decorators";
import { ParseIntPipe } from "@nestjs/common/pipes";

import { Categories } from "../entities/categories.entity";
import { CategoriesService } from "../services/categories.service";

@Controller ("/categories")
export class CategoriesController {
    constructor (private readonly CategoriesService: CategoriesService) { }

    @Get ()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categories[]> {
        return this.CategoriesService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id: number): Promise<Categories> {
        return this.CategoriesService.findById(id);
    }

    @Get('/categories_name/:categories_name')
    @HttpCode(HttpStatus.OK)
    findByCatName(@Param('categories_name') categories_name: string): Promise<Categories[]> {
        return this.CategoriesService.findByCatName(categories_name);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body() categories: Categories): Promise<Categories> {
        return this.CategoriesService.create(categories);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categories: Categories): Promise<Categories> {
        return this.CategoriesService.update(categories)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.CategoriesService.delete(id);
    }
}