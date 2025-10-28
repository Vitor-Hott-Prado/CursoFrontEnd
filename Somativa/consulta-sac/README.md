🏥 Sistema de Agendamento Médico - README Completo
📋 Descrição do Projeto
Este projeto é um sistema completo de agendamento médico desenvolvido com Next.js 14+ e MongoDB. O sistema permite o gerenciamento eficiente de consultas, médicos e pacientes com controle de acesso baseado em roles.

🚀 Status: Em Desenvolvimento | 📅 Versão: 1.0.0

🎯 Funcionalidades Principais
👥 Gestão de Usuários
4 Roles Distintas: Admin, Recepcionista, Médico, Paciente

Autenticação Segura: JWT com bcrypt

Perfis Personalizados: Interface adaptada para cada tipo de usuário

🏥 Gestão Médica
📅 Agendamento inteligente de consultas

🔄 Remarcação e cancelamento

📊 Status de consultas: Agendada, Confirmada, Realizada, Cancelada

👨‍⚕️ Gestão de especialidades médicas

💼 Gestão de Pacientes
📝 Cadastro completo de pacientes

📞 Histórico de contatos

🏷️ Prontuário básico

🏗️ Arquitetura do Sistema
📊 Diagrama de Classes
classDiagram
    class Usuario {
        +String _id
        +String nome
        +String email
        +String senha
        +String funcao
        +Date criadoEm
        +Date atualizadoEm
        +criar()
        +autenticar()
        +atualizarPerfil()
    }

    class Paciente {
        +String _id
        +String nome
        +String email
        +String telefone
        +String cpf
        +Date dataNascimento
        +String endereco
        +Date criadoEm
        +criar()
        +buscarPorCPF()
        +listarTodos()
    }

    class Medico {
        +String _id
        +String nome
        +String especialidade
        +String crm
        +String telefone
        +String email
        +Boolean ativo
        +Date criadoEm
        +listarEspecialidades()
        +buscarPorEspecialidade()
    }

    class Consulta {
        +String _id
        +ObjectId pacienteId
        +ObjectId medicoId
        +Date dataConsulta
        +String hora
        +String status
        +String observacoes
        +Date criadoEm
        +agendar()
        +cancelar()
        +confirmar()
        +listarPorMedico()
        +listarPorPaciente()
        +verificarDisponibilidade()
    }

    Usuario <|-- Medico
    Usuario "1" -- "1" Medico : possui
    Paciente "1" --> "*" Consulta : possui
    Medico "1" --> "*" Consulta : atende
🔄 Fluxo de Agendamento
flowchart TD
    A[📋 Recepcionista] --> B[👥 Seleciona Paciente]
    B --> C[👨‍⚕️ Escolhe Médico]
    C --> D[📅 Verifica Disponibilidade]
    D --> E{⏰ Horário Disponível?}
    E -->|Sim| F[✅ Confirma Agendamento]
    E -->|Não| G[🔄 Sugere Alternativas]
    G --> C
    F --> H[💾 Salva no Banco]
    H --> I[📧 Notifica Médico]
    H --> J[📱 Notifica Paciente]
    I --> K[🎉 Agendamento Concluído]
    J --> K
🛠️ Tecnologias Utilizadas
🎯 Frontend
Next.js 14+ (App Router)

React 18+ com Hooks

TypeScript para type safety

SCSS/SASS para estilização

React Hook Form para formulários

Date-fns para manipulação de datas

⚙️ Backend
Next.js API Routes

MongoDB com Mongoose ODM

JWT para autenticação

Bcrypt para hash de senhas

CORS para segurança

Validator para validações

🔧 Ferramentas de Desenvolvimento
Git para controle de versão

ESLint + Prettier para qualidade de código

Mermaid.js para documentação

Postman para testes de API

🚀 Instalação e Configuração
📋 Pré-requisitos
Node.js 18.17 ou superior

MongoDB (Atlas ou local)

npm ou yarn

⚙️ Passos de Instalação
Clone o repositório

bash
git clone https://github.com/seu-usuario/sistema-agendamento-medico.git
cd sistema-agendamento-medico
Instale as dependências

bash
npm install
# ou
yarn install
Configure as variáveis de ambiente

bash
cp .env.example .env.local
Configure o arquivo .env.local

env
# Banco de Dados
MONGODB_URI=mongodb://localhost:27017/agendamento-medico
# ou para MongoDB Atlas:
# MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/agendamento-medico

# Autenticação
JWT_SECRET=seu_jwt_secret_super_seguro_aqui
JWT_EXPIRES_IN=7d

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=seu_nextauth_secret

# Aplicação
NODE_ENV=development
Execute a aplicação

bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
Acesse a aplicação

text
http://localhost:3000
🔌 Estrutura do Projeto
text
/app
├── /api
│   ├── /auth
│   │   ├── login/route.ts
│   │   └── register/route.ts
│   ├── /usuarios
│   │   └── route.ts
│   ├── /pacientes
│   │   └── route.ts
│   ├── /medicos
│   │   └── route.ts
│   └── /consultas
│       └── route.ts
├── /components
│   ├── /ui
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Modal.tsx
│   ├── /forms
│   │   ├── LoginForm.tsx
│   │   ├── PacienteForm.tsx
│   │   └── ConsultaForm.tsx
│   └── /layout
│       ├── DashboardLayout.tsx
│       └── AuthLayout.tsx
├── /models
│   ├── Usuario.ts
│   ├── Paciente.ts
│   ├── Medico.ts
│   └── Consulta.ts
├── /lib
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
├── /styles
│   ├── globals.scss
│   └── components/
└── /types
    ├── usuario.ts
    ├── paciente.ts
    └── consulta.ts
🔑 Roles e Permissões
👨‍💼 Administrador
✅ Gestão completa de usuários

✅ Acesso a todos os relatórios

✅ Configurações do sistema

✅ Backup de dados

📋 Recepcionista
✅ Cadastrar pacientes

✅ Agendar consultas

✅ Gerenciar agendamentos

✅ Visualizar calendário

👨‍⚕️ Médico
✅ Visualizar própria agenda

✅ Confirmar consultas

✅ Atualizar status

✅ Ver histórico de pacientes

👤 Paciente
✅ Visualizar próprias consultas

✅ Receber lembretes

✅ Cancelar consultas (com antecedência)

🎯 Endpoints da API
🔐 Autenticação
http
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
👥 Usuários
http
GET    /api/usuarios
GET    /api/usuarios/:id
PUT    /api/usuarios/:id
DELETE /api/usuarios/:id
🏥 Pacientes
http
GET    /api/pacientes
POST   /api/pacientes
GET    /api/pacientes/:id
PUT    /api/pacientes/:id
DELETE /api/pacientes/:id
👨‍⚕️ Médicos
http
GET    /api/medicos
POST   /api/medicos
GET    /api/medicos/:id
PUT    /api/medicos/:id
GET    /api/medicos/especialidades
📅 Consultas
http
GET    /api/consultas
POST   /api/consultas
GET    /api/consultas/:id
PUT    /api/consultas/:id
DELETE /api/consultas/:id
GET    /api/consultas/disponibilidade
💡 Como Usar
Para Recepcionistas:
Faça login com suas credenciais

Cadastre pacientes no menu "Pacientes"

Agende consultas verificando disponibilidade

Gerencie agendamentos na lista de consultas

Para Médicos:
Acesse sua agenda após login

Confirme consultas pendentes

Atualize status após atendimento

Visualize seu histórico

Para Administradores:
Gerencie usuários e permissões

Acesse relatórios de utilização

Configure especialidades médicas

🧪 Testes
bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Coverage
npm run test:coverage
🐛 Solução de Problemas
❌ Er
voce pode me mandar tudo isso tipo direto sabe ]
🏥 Sistema de Agendamento Médico
📋 Descrição do Projeto
Sistema completo de agendamento médico desenvolvido com Next.js 14+ e MongoDB. Gerencia consultas, médicos e pacientes com controle de acesso baseado em roles.

🚀 Funcionalidades Principais
👥 4 Roles: Admin, Recepcionista, Médico, Paciente

📅 Agendamento inteligente com verificação de conflitos

🔄 Status de consultas: Agendada, Confirmada, Realizada, Cancelada

👨‍⚕️ Gestão de médicos e especialidades

📊 Dashboard para cada tipo de usuário

🛠️ Tecnologias
Frontend: Next.js 14, React 18, TypeScript, SCSS

Backend: Next.js API Routes, MongoDB, Mongoose

Auth: JWT, Bcrypt

Ferramentas: ESLint, Prettier, Git

🏗️ Diagrama de Classes
classDiagram
    class Usuario {
        +String _id
        +String nome
        +String email
        +String senha
        +String funcao
        +Date criadoEm
        +Date atualizadoEm
    }

    class Paciente {
        +String _id
        +String nome
        +String email
        +String telefone
        +String cpf
        +Date dataNascimento
        +String endereco
    }

    class Medico {
        +String _id
        +String nome
        +String especialidade
        +String crm
        +String telefone
        +String email
        +Boolean ativo
    }

    class Consulta {
        +String _id
        +ObjectId pacienteId
        +ObjectId medicoId
        +Date dataConsulta
        +String hora
        +String status
        +String observacoes
        +Date criadoEm
    }

    Usuario <|-- Medico
    Usuario "1" -- "1" Medico
    Paciente "1" --> "*" Consulta
    Medico "1" --> "*" Consulta
🔄 Fluxo de Agendamento
flowchart TD
    A[Recepcionista] --> B[Seleciona Paciente]
    B --> C[Escolhe Médico]
    C --> D[Verifica Disponibilidade]
    D --> E{Disponível?}
    E -->|Sim| F[Confirma Agendamento]
    E -->|Não| G[Sugere Alternativas]
    G --> C
    F --> H[Salva no Banco]
    H --> I[Notifica Médico]
    H --> J[Notifica Paciente]
🚀 Instalação Rápida
1. Clone e Instalação
bash
git clone https://github.com/seu-usuario/sistema-agendamento-medico.git
cd sistema-agendamento-medico
npm install
2. Configuração do Ambiente
Crie .env.local:

env
MONGODB_URI=mongodb://localhost:27017/agendamento-medico
JWT_SECRET=seu_jwt_secret_super_seguro_aqui
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=seu_nextauth_secret
3. Execução
bash
npm run dev
Acesse: http://localhost:3000

📁 Estrutura do Projeto
text
/app
├── /api
│   ├── /auth/[login,register]/route.ts
│   ├── /usuarios/route.ts
│   ├── /pacientes/route.ts
│   ├── /medicos/route.ts
│   └── /consultas/route.ts
├── /components
│   ├── /ui[Header, Sidebar, Modal]
│   ├── /forms[Login, Paciente, Consulta]
│   └── /layout[Dashboard, Auth]
├── /models
│   ├── Usuario.ts
│   ├── Paciente.ts
│   ├── Medico.ts
│   └── Consulta.ts
└── /lib[auth, db, utils]
🔑 Roles e Permissões
👨‍💼 Administrador
✅ Gestão completa de usuários

✅ Relatórios do sistema

✅ Configurações gerais

📋 Recepcionista
✅ Cadastrar pacientes

✅ Agendar consultas

✅ Gerenciar agendamentos

👨‍⚕️ Médico
✅ Visualizar própria agenda

✅ Confirmar consultas

✅ Atualizar status

👤 Paciente
✅ Visualizar próprias consultas

✅ Cancelar consultas

🔌 Endpoints da API
🔐 Autenticação
http
POST /api/auth/login
POST /api/auth/register
👥 Usuários
http
GET    /api/usuarios
POST   /api/usuarios
GET    /api/usuarios/:id
PUT    /api/usuarios/:id
DELETE /api/usuarios/:id
🏥 Pacientes
http
GET    /api/pacientes
POST   /api/pacientes
GET    /api/pacientes/:id
PUT    /api/pacientes/:id
👨‍⚕️ Médicos
http
GET    /api/medicos
POST   /api/medicos
GET    /api/medicos/especialidades
📅 Consultas
http
GET    /api/consultas
POST   /api/consultas
GET    /api/consultas/disponibilidade
PUT    /api/consultas/:id/cancelar
💡 Como Usar
Para Recepcionistas:
Login com credenciais

Cadastrar pacientes no menu Pacientes

Agendar consultas verificando disponibilidade

Gerenciar agendamentos existentes

Para Médicos:
Acessar agenda após login

Confirmar consultas pendentes

Atualizar status após atendimento

🐛 Solução de Problemas Comuns
❌ Erro de Conexão MongoDB
bash
# Verifique se MongoDB está rodando
sudo systemctl start mongod
# ou
mongod
❌ Erro de Variáveis de Ambiente
bash
# Verifique se .env.local existe
ls -la .env.local
# Verifique se variáveis estão corretas
cat .env.local
❌ Porta 3000 Ocupada
bash
# Execute em porta diferente
npm run dev -- -p 3001
