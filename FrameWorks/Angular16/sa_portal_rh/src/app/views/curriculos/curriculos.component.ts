import { Component, OnInit } from '@angular/core';
import { Curriculo } from '../../models/curriculo.model';
import { CurriculoService } from '../../services/curriculos.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.css']
})
export class CurriculosComponent implements OnInit {
  curriculos: Curriculo[] = [];
  novoCurriculo: any = {
    usuarioId: 0,
    nomeCompleto: '',
    email: '',
    telefone: '',
    cpf: '',
    dataNascimento: '',
    cep: '',
    formacaoAcademica: '',
    experienciaProfissional: '',
    habilidades: ''
  };

  constructor(private curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this.curriculoService.getCurriculos().subscribe({
      next: (dados: Curriculo[]) => {
        this.curriculos = dados;
      },
      error: (err) => alert(err.message)
    });
  }

  adicionarCurriculo(): void {
    // Converte campos string para array
    const curriculoParaEnviar = new Curriculo(
      null,
      this.novoCurriculo.usuarioId,
      this.novoCurriculo.nomeCompleto,
      this.novoCurriculo.email,
      this.novoCurriculo.telefone,
      this.novoCurriculo.cpf,
      this.novoCurriculo.dataNascimento,
      this.novoCurriculo.cep,
      this.novoCurriculo.formacaoAcademica.split(',').map((s: string) => s.trim()).filter((s: string) => s),
      this.novoCurriculo.experienciaProfissional.split(',').map((s: string) => s.trim()).filter((s: string) => s),
      this.novoCurriculo.habilidades.split(',').map((s: string) => s.trim()).filter((s: string) => s),
      null,
      null
    );

    this.curriculoService.createCurriculo(curriculoParaEnviar).subscribe({
      next: () => {
        this.listarCurriculos();
        this.novoCurriculo = {
          usuarioId: 0,
          nomeCompleto: '',
          email: '',
          telefone: '',
          cpf: '',
          dataNascimento: '',
          cep: '',
          formacaoAcademica: '',
          experienciaProfissional: '',
          habilidades: ''
        };
      },
      error: (err) => alert(err.message)
    });
  }
}