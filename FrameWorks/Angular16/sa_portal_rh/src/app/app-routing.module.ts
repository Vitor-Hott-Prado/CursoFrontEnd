import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component'; // Caminho corrigido
import { CurriculoListComponent } from './views/curriculo-list/curriculo-list.component';
import { PainelCurriculoComponent } from './views/painel-curriculos/painel-curriculo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'curriculos', component: CurriculosComponent },
  { path: 'painel-vagas', component: PainelVagasComponent },
  {path: 'painel-curriculos', component: PainelCurriculoComponent },// Corrigido para CurriculosComponent  
  {path:"curriculo-list", component: CurriculoListComponent } // Corrigido para CurriculosComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }