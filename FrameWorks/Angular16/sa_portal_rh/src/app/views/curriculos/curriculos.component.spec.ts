import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CurriculosComponent } from './curriculos.component';
import { CurriculoService } from '../../services/curriculos.service';
import { of } from 'rxjs';
import { Curriculo } from '../../models/curriculo.model';

describe('CurriculosComponent', () => {
  let component: CurriculosComponent;
  let fixture: ComponentFixture<CurriculosComponent>;
  let curriculoServiceSpy: jasmine.SpyObj<CurriculoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CurriculoService', ['getCurriculos', 'createCurriculo']);

    await TestBed.configureTestingModule({
      declarations: [ CurriculosComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: CurriculoService, useValue: spy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculosComponent);
    component = fixture.componentInstance;
    curriculoServiceSpy = TestBed.inject(CurriculoService) as jasmine.SpyObj<CurriculoService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve listar curriculos ao inicializar', () => {
    const mockCurriculos = [
      new Curriculo(1, 1, 'João', 'joao@email.com', '123', '111', '2000-01-01', '12345-000', ['Formação'], ['Experiência'], ['Habilidade'], '2024-01-01', '2024-01-01')
    ];
    curriculoServiceSpy.getCurriculos.and.returnValue(of(mockCurriculos));
    component.ngOnInit();
    expect(component.curriculos.length).toBe(1);
    expect(component.curriculos[0].nomeCompleto).toBe('João');
  });

  it('deve adicionar um novo curriculo', () => {
    curriculoServiceSpy.getCurriculos.and.returnValue(of([]));
    curriculoServiceSpy.createCurriculo.and.returnValue(of(
      new Curriculo(2, 2, 'Maria', 'maria@email.com', '456', '222', '1999-12-31', '54321-000', ['Formação2'], ['Experiência2'], ['Habilidade2'], '2024-01-01', '2024-01-01')
    ));

    component.novoCurriculo = {
      usuarioId: 2,
      nomeCompleto: 'Maria',
      email: 'maria@email.com',
      telefone: '456',
      cpf: '222',
      dataNascimento: '1999-12-31',
      cep: '54321-000',
      formacaoAcademica: 'Formação2',
      experienciaProfissional: 'Experiência2',
      habilidades: 'Habilidade2'
    };

    component.adicionarCurriculo();
    expect(curriculoServiceSpy.createCurriculo).toHaveBeenCalled();
  });
});