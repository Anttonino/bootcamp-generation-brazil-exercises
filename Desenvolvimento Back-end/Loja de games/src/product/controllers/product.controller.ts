import { ParseIntPipe } from "@nestjs/common";
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";

import { Product } from "../entities/product.entity";
import { ProductService } from "../services/product.service";


@Controller ("/product")
export class ProductController {
    constructor (private readonly ProductService: ProductService) { }

    @Get ()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Product[]> {
        return this.ProductService.findAll();
    }

    @Get ('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe)id: number): Promise<Product> {
        return this.ProductService.findById(id);
    }

    @Get ('product_name/:product_name')
    @HttpCode(HttpStatus.OK)
    findByProName(@Param('product_name') product_name: string): Promise<Product[]> {
        return this.ProductService.findByProName(product_name);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    create(@Body() product: Product): Promise<Product> {
        return this.ProductService.create(product)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() product: Product): Promise<Product> {
        return this.ProductService.update(product);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id: number) {
        return this.ProductService.delete(id);
    }

}