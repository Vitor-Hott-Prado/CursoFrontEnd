import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CurriculoService } from './curriculos.service'; // Confirme o caminho para o seu serviço
import { Curriculo } from '../models/curriculo.model'; // Seu modelo de Curriculo

describe('CurriculoService', () => {
  let service: CurriculoService;
  let httpMock: HttpTestingController;
  // URL base da sua API para currículos
  const apiUrl = 'http://localhost:3004/curriculos';

  // --- Configuração e Desmontagem para cada Teste ---
  beforeEach(() => {
    // Configura o ambiente de teste do Angular
    TestBed.configureTestingModule({
      // Importa o módulo que simula as requisições HTTP, essencial para testes de serviço
      imports: [HttpClientTestingModule],
      // Fornece o serviço que será testado
      providers: [CurriculoService],
    });

    // Injeta o serviço e o controlador de mock HTTP para que possam ser usados nos testes
    service = TestBed.inject(CurriculoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Após cada teste, verificamos se todas as requisições HTTP mockadas foram realizadas.
    // Isso é crucial para garantir que nenhum teste "esqueceu" de tratar uma requisição pendente.
    httpMock.verify();
  });



  it('deve ser criado', () => {
    // Garante que a instância do CurriculoService foi injetada e criada com sucesso
    expect(service).toBeTruthy();
  });

  it('deve obter todos os currículos', () => {
    // Define um array de objetos Curriculo simulados (mock) que a API retornaria.
    // **IMPORTANTE:** `formacaoAcademica`, `experienciaProfissional` e `habilidades`
    // são passados como ARRAYS de strings, conforme seu modelo `Curriculo`.
    const mockCurriculos: Curriculo[] = [
      new Curriculo(
        1,                     // id
        1,                     // usuarioId
        'João Silva',          // nomeCompleto
        'joao@email.com',      // email
        '123456789',           // telefone
        '11111111111',         // cpf
        '1990-01-01',          // dataNascimento
        '12345-000',           // cep
        ['Superior em Ciência da Computação', 'Pós-graduação em Inteligência Artificial'], // ✅ ARRAY de strings
        ['Desenvolvedor Fullstack na Empresa A', 'Arquiteto de Software na Empresa B'],   // ✅ ARRAY de strings
        ['JavaScript', 'Angular', 'Node.js', 'Python', 'AWS'],                            // ✅ ARRAY de strings
        '2024-01-01T10:00:00Z', // dataCriacao (exemplo de data com fuso horário)
        '2024-01-01T10:00:00Z'  // dataAtualizacao
      )
    ];

    // Chamamos o método do serviço que faz a requisição GET
    service.getCurriculos().subscribe((curriculos) => {
      // Verificamos se a quantidade de currículos retornados é a esperada
      expect(curriculos.length).toBe(1);
      // Verificamos se os dados retornados são idênticos aos dados mock
      expect(curriculos).toEqual(mockCurriculos);
    });

    // Esperamos que uma única requisição HTTP GET seja feita para a `apiUrl`
    const req = httpMock.expectOne(apiUrl);
    // Confirmamos que o método da requisição foi 'GET'
    expect(req.request.method).toBe('GET');
    // "Descarregamos" (flush) a requisição com os dados mock, simulando a resposta da API
    req.flush(mockCurriculos.map(c => c.toMap())); // Flush com o map, pois o service faz fromMap
  });

  it('deve obter um currículo por ID', () => {
    // Define um único objeto Curriculo mock para um ID específico.
    // ATENÇÃO: `formacaoAcademica`, `experienciaProfissional` e `habilidades` são ARRAYS.
    const mockCurriculo = new Curriculo(
      1,
      1,
      'Maria Souza',
      'maria@email.com',
      '987654321',
      '22222222222',
      '1992-02-02',
      '54321-000',
      ['Graduação em Design de Produto'],
      ['Designer Júnior na Startup Y'],
      ['Figma', 'Sketch', 'Prototipagem'],
      '2024-01-01T10:00:00Z',
      '2024-01-01T10:00:00Z'
    );

    // Chamamos o método do serviço para obter um currículo por ID
    service.getCurriculoById(1).subscribe((curriculo) => {
      expect(curriculo).toEqual(mockCurriculo);
    });

    // Esperamos uma requisição GET para a URL com o ID específico
    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCurriculo.toMap()); // Simula a resposta como um Map
  });

  it('deve obter currículos por ID de usuário', () => {
    // Define uma lista de currículos mock associada a um ID de usuário específico.
    // ATENÇÃO: `formacaoAcademica`, `experienciaProfissional` e `habilidades` são ARRAYS.
    const mockCurriculos: Curriculo[] = [
      new Curriculo(
        2,
        5,
        'Carlos Santos',
        'carlos@email.com',
        '999999999',
        '33333333333',
        '1995-03-03',
        '67890-000',
        ['Mestrado em Engenharia Elétrica'],
        ['Engenheiro de Hardware na Tech Corp'],
        ['Verilog', 'VHDL', 'Eletrônica Digital'],
        '2024-01-01T10:00:00Z',
        '2024-01-01T10:00:00Z'
      )
    ];

    // Chamamos o método do serviço para obter currículos filtrados por ID de usuário
    service.getCurriculoByUsuarioId(5).subscribe((curriculos) => {
      expect(curriculos).toEqual(mockCurriculos);
    });

    // Esperamos uma requisição GET com o parâmetro de consulta `usuarioId`
    const req = httpMock.expectOne(`${apiUrl}?usuarioId=5`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCurriculos.map(c => c.toMap()));
  });

  it('deve criar um currículo', () => {
    // Define o objeto de novo currículo que seria enviado ao backend (sem ID inicial).
    // As datas de criação/atualização serão adicionadas pelo serviço, mas o mock já prevê a estrutura de retorno.
    const curriculoParaEnviar = new Curriculo(
      null,    // ID é nulo, pois a API irá gerá-lo
      7,
      'Ana Costa',
      'ana@email.com',
      '111222333',
      '44444444444',
      '1999-04-04',
      '00000-000',
      ['Técnico em Edificações'],
      ['Estagiária em Construtora XYZ'],
      ['AutoCAD', 'SketchUp'],
      null, // No teste, simulamos que o backend vai adicionar essas datas.
      null  // O serviço as adicionará antes de enviar.
    );

    // Resposta esperada da API, já com o ID e datas (se o backend retornar).
    // O service.ts adiciona as datas antes do toMap, então o objeto enviado terá.
    // O mock aqui representa o que o backend retornaria após a criação.
    const now = new Date().toISOString().split('.')[0] + 'Z'; // Mock de data do backend (simplificado)
    const curriculoCriadoComId = new Curriculo(
      99, // ID gerado pelo backend
      7,
      'Ana Costa',
      'ana@email.com',
      '111222333',
      '44444444444',
      '1999-04-04',
      '00000-000',
      ['Técnico em Edificações'],
      ['Estagiária em Construtora XYZ'],
      ['AutoCAD', 'SketchUp'],
      now, // Data de criação adicionada pelo backend/service
      now  // Data de atualização adicionada pelo backend/service
    );


    // Chamamos o método do serviço para criar o currículo
    service.createCurriculo(curriculoParaEnviar).subscribe((curriculo) => {
      expect(curriculo.id).toBe(99);
      expect(curriculo.nomeCompleto).toBe('Ana Costa');
      // Verifique se as datas foram definidas pelo serviço/mock
      expect(curriculo.dataCriacao).toBeDefined();
      expect(curriculo.dataAtualizacao).toBeDefined();
      // Compare o objeto completo para garantir consistência
      expect(curriculo).toEqual(curriculoCriadoComId);
    });

    // Esperamos uma requisição POST para a `apiUrl`
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    // Verifica se o corpo da requisição enviada é o objeto `curriculoParaEnviar`
    // convertido para Map e com as datas adicionadas pelo serviço.
    const expectedBody = {
      ...curriculoParaEnviar.toMap(),
      dataCriacao: jasmine.any(String), // Espera qualquer string para a data
      dataAtualizacao: jasmine.any(String) // Espera qualquer string para a data
    };
    expect(req.request.body).toEqual(expectedBody);
    req.flush(curriculoCriadoComId.toMap()); // Simula a resposta da API como um Map
  });

  it('deve atualizar um currículo', () => {
    // Define o objeto Curriculo com os dados que seriam atualizados.
    const curriculoAtualizado = new Curriculo(
      1,
      1,
      'João Silva Atualizado', // Nome alterado
      'joao@email.com',
      '123456789',
      '11111111111',
      '1990-01-01',
      '12345-000',
      ['Nova Formação: Pós-graduação em Gestão de Projetos'],
      ['Nova Experiência: Desenvolvedor Pleno na Empresa Beta'],
      ['NodeJS', 'Docker', 'Kubernetes', 'Testes Unitários'],
      '2024-01-01T10:00:00Z', // Data de criação original
      '2024-01-02T11:30:00Z'  // Data de atualização (simulando uma nova)
    );

    // Chamamos o método do serviço para atualizar o currículo com ID 1
    service.updateCurriculo(1, curriculoAtualizado).subscribe((curriculo) => {
      expect(curriculo.nomeCompleto).toBe('João Silva Atualizado');
      // Verificamos se o objeto retornado é idêntico ao objeto que foi enviado para atualização
      expect(curriculo).toEqual(curriculoAtualizado);
    });

    // Esperamos uma requisição PUT para a URL específica do currículo a ser atualizado
    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    // Verificamos se o corpo da requisição PUT contém os dados atualizados, incluindo a data de atualização
    const expectedBody = {
      ...curriculoAtualizado.toMap(),
      dataAtualizacao: jasmine.any(String) // A data de atualização será definida pelo serviço
    };
    expect(req.request.body).toEqual(expectedBody);
    req.flush(curriculoAtualizado.toMap()); // A API geralmente retorna o recurso atualizado após um PUT
  });

  it('deve deletar um currículo', () => {
    // Chamamos o método do serviço para deletar um currículo com ID 1
    service.deleteCurriculo(1).subscribe((res) => {
      // Para requisições DELETE bem-sucedidas (geralmente status 204 No Content), a resposta é `undefined`
      expect(res).toBeUndefined();
    });

    // Esperamos uma requisição DELETE para a URL específica do currículo a ser deletado
    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    // Simulamos uma resposta vazia (`null`) para a requisição DELETE
    req.flush(null);
  });



  it('deve lidar com erro ao obter um currículo (ex: 404 Not Found)', () => {
    // Define os detalhes do erro que a requisição mockada deve retornar
    const mockErrorResponse = { status: 404, statusText: 'Not Found' };
    // Cria um objeto `ErrorEvent` para simular um erro de rede ou HTTP real
    const errorEvent = new ErrorEvent('HTTP error', {
      message: 'Simulated 404 error from server',
    });

    // Chamamos o método do serviço. Usamos um objeto `subscribe` completo para testar ambos `next` (sucesso) e `error` (falha)
    service.getCurriculoById(999).subscribe({
      // `next` é chamado se a requisição mockada for bem-sucedida. Se cair aqui, o teste falhará, pois esperamos um erro.
      next: () => fail('A requisição deveria ter falhado, mas obteve sucesso.'),
      // Este bloco é executado se a requisição mockada retornar um erro
      error: (error) => {
        // Verificamos se o status e a mensagem do erro correspondem ao que simulamos
        expect(error.status).toBe(404);
        expect(error.statusText).toBe('Not Found');
        // Opcional: verificar a mensagem de erro que o handleError propaga
        expect(error.message).toContain('Simulated 404 error from server');
      }
    });

    // Esperamos que uma requisição GET para o ID 999 seja feita
    const req = httpMock.expectOne(`${apiUrl}/999`);
    expect(req.request.method).toBe('GET');
    // Simulamos a ocorrência de um erro na requisição, passando o `ErrorEvent` e os detalhes da resposta HTTP de erro
    req.error(errorEvent, mockErrorResponse);
  });
});