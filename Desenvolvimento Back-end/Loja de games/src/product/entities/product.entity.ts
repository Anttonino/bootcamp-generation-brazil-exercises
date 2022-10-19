import { IsNotEmpty } from "class-validator";
import { Categories } from "src/categories/entities/categories.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: "tb_product"})
export class Product {

    @PrimaryGeneratedColumn ()
    id: number;

    @IsNotEmpty()
    @Column ({length: 100, nullable: false})
    product_name: string;

    @IsNotEmpty ()
    @Column ('decimal', {precision: 7, scale: 2, nullable: false})
    price: number;

    @IsNotEmpty ()
    @Column ({nullable: false})
    available: boolean;
    
    @ManyToOne(() => Categories, (categories) => categories.product, {
        onDelete: "CASCADE"
    })
    categories: Categories
}