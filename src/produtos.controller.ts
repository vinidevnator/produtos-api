import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV02', 'Livro iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return 'Produto criado.';
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return 'Produto atualizado.';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Produto deletado ${params.id}`;
  }
}
