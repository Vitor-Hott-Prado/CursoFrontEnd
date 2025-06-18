import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-painel-curriculo',
  templateUrl: './painel-curriculo.component.html',
  styleUrls: ['./painel-curriculo.component.scss']
})
export class PainelCurriculoComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', 0, '', '', '');
  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._curriculoService.getCurriculos().subscribe(
      (res) => {
        this.curriculos = res.map((c) => Curriculo.fromMap(c));
      },
      (err) => {
        console.error('Erro ao listar currículos:', err);
      }
    );
  }

  listarCurriculoPorId(curriculo: Curriculo): void {
    this.curriculo = new Curriculo(
      curriculo.id,
      curriculo.nome,
      curriculo.idade,
      curriculo.linkedin,
      curriculo.github,
      curriculo.experiencia
    );
  }

  cadastrarCurriculo(): void {
    this._curriculoService.postCurriculos(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao cadastrar currículo:', err);
      }
    );
  }

  atualizarCurriculo(id: number): void {
    this._curriculoService.putCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao atualizar currículo:', err);
      }
    );
  }

  excluirCurriculo(id: number): void {
    this._curriculoService.deleteCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', 0, '', '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao excluir currículo:', err);
      }
    );
  }
}
