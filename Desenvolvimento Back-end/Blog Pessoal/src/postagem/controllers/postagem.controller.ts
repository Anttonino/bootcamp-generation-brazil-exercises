import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.service";

@Controller ('/postagens')
export class PostagemController {
    constructor (private readonly postagemService: PostagemService) {}
    
    @Get ()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Postagem[]> { 
        return this.postagemService.findAll () 
    }

    @Get ('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id' , ParseIntPipe)id: number): Promise<Postagem> {
        return this.postagemService.findById(id)
    }

    @Get ('/:titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(
        @Param('titulo')
        titulo: string
    ): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create (@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update (@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update (postagem);
    }

    @Delete('/:id')
    @HttpCode (HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.postagemService.delete(id);
    }
}
