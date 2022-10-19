import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm/dist";
import { CategoriesController } from "./controllers/categories.controller";
import { Categories } from "./entities/categories.entity";
import { CategoriesService } from "./services/categories.service";

@Module ({
    imports: [TypeOrmModule.forFeature([Categories])],
    providers: [CategoriesService],
    controllers: [CategoriesController],
    exports: [TypeOrmModule]
})

export class CategoriesModule {}