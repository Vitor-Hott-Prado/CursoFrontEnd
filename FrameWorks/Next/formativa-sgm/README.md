# Sistema de Gestão de Manutenção (Formativa)

## Briefing

### Visão Geral do Projeto
O projeto consiste no desenvolvimento de um Sistema de Gestão de Manutenção (SGM) no formato de uma aplicação web.

## Escopo

- ### Objetivos:

- ### Público-Alvo:
    - Técnicos de Manutenção
    - Gestores de Manutenção
    - Administradores do Sistema

- ### Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

1. ### Diagrama de Classes
Este Diagrama modela as principais entidades do sistema:
- Usuários (User/Usuarios);
- Máquinas/Equipamentos (Equipment);
- Ordem de Serviço(Service);

```mermaid

classDiagram

    class Usuario{
        +String id
        +String nome
        +String email
        +String senha
        +String funcao
        +login()
        +logout()
        +create()
        +read()
        +update()
        +delete()
    }

    class Equipamento{
        +String id
        +String nome
        +String modelo
        +String numeroSerie
        +String localizacao
        +String status
        +create()
        +read()
        +update()
        +delete()
    }

    class OrdemServico{
        +String id
        +string titulo
        +String descricao
        +String tipoManutencao
        +String status
        +String idTecnico
        +String IdEquipamento
        +create()
        +read()
        +update()
        +delete()
    }

    Usuario "1" -- "1+" OrdemServico : "é resposável por"
    Equipamento "1" -- "1+" OrdemServico : "associado a"

```
 #### Explicação do Diagrama de Classe
 - Um Usuário (Técnico) por ser responsável por várias Ordens de Servico
 - Um Equipamento por estar associado a várias Ordens de Serviço

 2. ### Diagrama de Caso de Uso
 Ilustrar as interações dos diferentes tipos de usuários (atores) com as funcionalidades do sistema

#### Explicação:
- Atores: Técnico, Gestor, Admin

- Casos de Usos:
    - Técnico: Gerenciar Ordens de Servico (CRUD) e acessar o DashBoard
    - Gestor: Gerenciar Ordens de Serviço (CRUD) , Gerenciar Equipamento (CRUD), Acessar o DashBoard
    -Admin: Gerenciar Usuário, acessar o DashBoard

    Fazer o Login -> Antes de Qualquer Ação

```mermaid
graph TD
    subgraph "SGM"
        caso1([Fazer Login])
        caso2([Gerenciar Ordens de Serviço - CRUD])
        caso3([Gerenciar Equipamentos - CRUD])
        caso4([Gerenciar Usuário])
        caso5([Acessar o DashBoard])
    end

    Tecnico([Técnico de Manutenção])
    Gestor([Gerente de Manutenção])
    Admin([Administrador do Sistema])

    Tecnico --> caso1 
    Tecnico --> caso3
    Tecnico --> caso5

    Gestor --> caso1
    Gestor --> caso2
    Gestor --> caso3
    Gestor --> caso5

    Admin --> caso1
    Admin --> caso4
    Admin --> caso5

    caso2 -.-> caso1
    caso3 -.-> caso1
    caso4 -.-> caso1
    caso5 -.-> caso1

```

3. ### Diagram de Fluxo (Login e Acesso ao Dashboard)
Detalhar o passo a passo que um usuário segue para se autenticar no sistema a acessar o dashboard

#### Explicação:
- O Fluxo começa quando osuário acessa a tela de login
- Insere as credenciais( email e senha)
- O sistema verifica se as credenciais são válidas
    - se sim: gera um JWT (token) => dashboard
    - se não: mensagem de erro eusuário permanece na tela de l
    login

```mermaid

graph TD
    A[Início] --> B{Acessa a Tela de Login}
    B --> C[Preencher Email e Senha]
    C --> D{Valida as Credenciais}
    D --> Sim --> E[Gera um Token JWT]
    E --> F[DashBoard]
    D --> Não --> K[Mensagem de Erro]
    K --> B

```
## Analise de Risco

# Matriz sw Anlise de Risco do Projeto SGM 

a tabela abaxiao apresneta os risoc intenficiados no projeto **SGM**,
organizados por categorias, juntocom a provabilidae, impacto e estrategias de mtitgação propostas.

---

## Riscos écnicos

Risco
Probabilidade
Impacto
Mitigação
TÉCNICOS
1. Chave secreta do JWT comprometida
Média
Alto
Utilizar chaves secretas longas e complexas, armazená-las de forma segura em variáveis de ambiente e implementar uma política de rotação de chaves.
2. Vulnerabilidade de truncamento do Bcrypt
Baixa
Alto
Garantir que a entrada para o hashing de senha nunca exceda o limite de 72 bytes, tratando a senha de forma isolada, sem concatenação com outros dados.
3. Lentidão do sistema com aumento de dados
Média
Média
Otimizar consultas ao banco de dados com indexação, implementar paginação nos resultados e planejar a arquitetura para escalabilidade futura.
4. Código de baixa qualidade com bugs
Alta
Média
Adotar práticas de código limpo, realizar revisões de código (code review) e implementar testes unitários e de integração contínua.
GERENCIAMENTO
5. Aumento do escopo (Scope Creep)
Alta
Média
Formalizar um processo de controle de mudanças. Analisar o impacto de cada nova solicitação no prazo e custo antes da aprovação.
6. Atraso na entrega do projeto
Alta
Média
Utilizar metodologias ágeis para entregas incrementais, reavaliar o cronograma a cada sprint e manter uma comunicação transparente sobre o progresso.
7. Requisitos mal interpretados
Média
Alto
Validar protótipos e wireframes com os usuários finais (técnicos e gestores) antes do desenvolvimento e manter uma comunicação constante para esclarecer dúvidas.
ORGANIZACIONAIS
8. Resistência dos usuários à nova ferramenta
Média
Alto
Envolver os usuários-chave desde o início do projeto, criar uma interface amigável (UI/UX) e comunicar claramente os benefícios do novo sistema.
9. Inserção de dados incorretos no sistema
Média
Alto
Implementar validações robustas nos formulários de cadastro e, se possível, criar um processo de importação e validação de dados existentes.
10. Falta de treinamento para os usuários
Média
Média
Desenvolver manuais de usuário, realizar sessões de treinamento práticas para cada perfil (técnico, gestor, administrador) e oferecer canais de suporte.



                   
