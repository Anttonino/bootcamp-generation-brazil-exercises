import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaService } from "src/tema/services/tema.service";
import { TemaModule } from "src/tema/tema.module";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}