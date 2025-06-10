import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss'],
})

//controller -> view -> model
export class VagasComponent implements OnInit {
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) {}
  //injetar o serviço de vagas dentro do componente

  ngOnInit(): void {
    this.listarVagas();
  }

  //função para lisar as vagas

  listarVagas() {
    this._vagasService.getVagas().subscribe(
      // subscribe é um método do Observable que permite recerber os dados e tratar para vetor
      (e) => {
        // listar vaga por vaga dentro do vetor
        this.vagas = e.map((vaga) => {
          return Vaga.fromMap(vaga);
        });
      }
    );
  }
}


