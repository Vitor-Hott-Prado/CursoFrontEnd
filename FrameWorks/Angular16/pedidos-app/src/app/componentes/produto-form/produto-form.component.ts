import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  nome: string="";
  preco: number = 0;

   constructor(private dadoService: DadosService){}

  salvarProduto(){
    const produto = new Produto(
      this.dadoService.getProdutos().length+1,//id
      this.nome,
      this.preco
    );
    this.dadoService.adicionarProduto(produto);
    this.nome=""
    this.preco=0;
    alert("Protudo Adicioar com Sucesso");
  }


  }
