import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { ProductController } from "./controllers/product.controller";
import { Product } from "./entities/product.entity";
import { ProductService } from "./services/product.service";


@Module ({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductService],
    controllers: [ProductController],
    exports: [TypeOrmModule]
})

export class ProductModule {}