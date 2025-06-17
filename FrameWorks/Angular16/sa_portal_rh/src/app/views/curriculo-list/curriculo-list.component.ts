import { Component, Input } from '@angular/core';
import { Curriculo } from '../../../models/curriculo.model';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.css']
})
export class CurriculoListComponent {
  @Input() curriculos: Curriculo[] = [];
}