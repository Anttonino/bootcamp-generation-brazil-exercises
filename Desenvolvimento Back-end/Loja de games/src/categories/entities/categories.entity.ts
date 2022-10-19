import { IsNotEmpty } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: "tb_categories"})
export class Categories {

    @PrimaryGeneratedColumn ()
    id: number;

    @IsNotEmpty()
    @Column ({length: 100, nullable: false})
    categories_name: string;

    @Column ({length: 100, nullable: false})
    description: string;

    @OneToMany(() => Product, (product) => product.categories)
    product: Product[];

}