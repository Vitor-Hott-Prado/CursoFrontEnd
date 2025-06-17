import { Component, EventEmitter, Output } from '@angular/core';
import { Curriculo } from '../../../models/curriculo.model';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent {
  curriculo: any = {
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

  @Output() salvar = new EventEmitter<Curriculo>();

  onSubmit() {
    const novoCurriculo = new Curriculo(
      null,
      this.curriculo.usuarioId,
      this.curriculo.nomeCompleto,
      this.curriculo.email,
      this.curriculo.telefone,
      this.curriculo.cpf,
      this.curriculo.dataNascimento,
      this.curriculo.cep,
      this.curriculo.formacaoAcademica.split(',').map((s: string) => s.trim()),
      this.curriculo.experienciaProfissional.split(',').map((s: string) => s.trim()),
      this.curriculo.habilidades.split(',').map((s: string) => s.trim()),
      null,
      null
    );
    this.salvar.emit(novoCurriculo);
    this.curriculo = {
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
  }
}