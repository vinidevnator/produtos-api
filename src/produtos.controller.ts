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
  obterUm(@Param() params): Produto {
    return this.produtos[0];
  }

  @Post()
  criar(@Body() produto: Produto) {
    produto.id = 100;
    this.produtos.push(produto);
    return produto;
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtos.pop();
  }
}
