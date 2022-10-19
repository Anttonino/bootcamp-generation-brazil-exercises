import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductService {
    constructor (@InjectRepository (Product) private productRepository: Repository<Product>) { }

    async findAll (): Promise<Product[]> {
        return await this.productRepository.find({
            relations: {categories: true}
        });
    }

    async findById(id: number): Promise<Product> {
        let product = await this.productRepository.findOne({
            where: {id},
            relations: {categories: true}
        });
    if (!product)
        throw new HttpException ('Product not found!', HttpStatus.NOT_FOUND)

        return product;
    }
    
    async findByProName (product_name: string): Promise<Product[]> {
        return await this.productRepository.find ({
            where: {product_name: ILike (`%${product_name}%`)},
            relations: {categories: true}
        })
    }

    async create (product: Product): Promise<Product> {
        return await this.productRepository.save(product);
    }

    async update (product: Product): Promise<Product> {
        let searchProduct: Product = await this.findById(product.id);

        if (!searchProduct || !product.id)
            throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
        return await this.productRepository.save(product);
        }

    async delete (id: number): Promise<DeleteResult> {
        let searchProduct = await this.findById(id);

        if (!searchProduct)
            throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
        return await this.productRepository.delete(id);
    }
}
