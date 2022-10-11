import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TemaService } from "src/tema/services/tema.service";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    constructor(
        @InjectRepository(Postagem)
        private postagemReporsitory: Repository<Postagem>,
        private temaService: TemaService
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemReporsitory.find({
            relations: {
                tema: true
            }
        });
    }

    async findById(id: number): Promise<Postagem> {
        let postagem = await this.postagemReporsitory.findOne({
            where: {
                id
            },
            relations: {
                tema: true
            }
        });

        if (!postagem)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)
        return postagem
    }
    async findByTitulo(titulo: String): Promise<Postagem[]> {
        return await this.postagemReporsitory.find({
            where: { titulo: ILike(`%${titulo}%`) },
                relations: {
                    tema: true
                }
        })
    }

    async create(postagem: Postagem): Promise<Postagem> {
        if (postagem.tema) {
            let tema = await this.temaService.findById(postagem.tema.id)

            if (!tema)
                throw new HttpException('Tema não encontrado', HttpStatus.NOT_FOUND)

        }
        return await this.postagemReporsitory.save(postagem)
    }

    async update(postagem: Postagem): Promise<Postagem> {
        let bucaPostagem: Postagem = await this.findById(postagem.id)

        if (!bucaPostagem || !postagem.id)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND)

        if (postagem.tema) {
            let tema = await this.temaService.findById(postagem.tema.id)

            if (!tema)
                throw new HttpException('Tema não encontrado', HttpStatus.NOT_FOUND)
        }
        return await this.postagemReporsitory.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult> {
        let bucaPostagem = await this.findById(id);

        if (!bucaPostagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND)

        return await this.postagemReporsitory.delete(id);
    }
}