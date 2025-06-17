import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CurriculoFormComponent } from './curriculo-form.component';

describe('CurriculoFormComponent', () => {
  let component: CurriculoFormComponent;
  let fixture: ComponentFixture<CurriculoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculoFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir o evento salvar ao submeter o formulário', () => {
    spyOn(component.salvar, 'emit');
    component.curriculo = {
      usuarioId: 1,
      nomeCompleto: 'Teste',
      email: 'teste@email.com',
      telefone: '123456789',
      cpf: '11111111111',
      dataNascimento: '2000-01-01',
      cep: '12345-000',
      formacaoAcademica: 'Formação1,Formação2',
      experienciaProfissional: 'Exp1,Exp2',
      habilidades: 'Angular,TypeScript'
    };
    component.onSubmit();
    expect(component.salvar.emit).toHaveBeenCalled();
  });
});