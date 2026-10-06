# 🚀 Exemplo API RESTful MVC - Node.js & Express

API RESTful desenvolvida em **Node.js** com **Express** e **Sequelize ORM**, aplicando a arquitetura **MVC (Model-View-Controller)** com padrão **DAO (Data Access Object)**. A aplicação conta com controle de acesso via autenticação **JWT**, criptografia de senhas com **Bcrypt**, suporte a **CORS**.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript Server-Side
- **Express.js** — Framework web rápido e minimalista
- **Sequelize ORM** — Mapeador objeto-relacional para banco de dados SQL
- **JSON Web Token (JWT)** — Autenticação segura stateless
- **Bcrypt** — Hashing seguro de senhas
- **CORS** — Middleware para habilitação de Cross-Origin Resource Sharing
- **Body-Parser** — Parsing de requisições HTTP em JSON

---

🔒 Práticas de Segurança Implementadas

Hashing de Senhas (Bcrypt): Nenhuma senha é salva em texto puro no banco de dados. Durante o cadastro, a senha é criptografada e, no login, comparada via bcrypt.compare.

Autenticação Stateless (JWT): Geração de tokens de acesso na rota de login. Rotas protegidas utilizam middleware de verificação do JWT no cabeçalho HTTP (Authorization).

CORS: Configuração de permissão para requisições cross-origin, garantindo integração com front-ends em domínios ou portas distintas.

---

## 📁 Estrutura do Projeto

```text
exemploMVC/
├── config/             # Configurações de acesso ao banco de dados (config.json)
├── daos/               # Camada de Acesso aos Dados (Data Access Objects)
│   ├── personagem-daos.js
│   └── user-daos.js
├── migrations/         # Histórico de alterações e criação das tabelas
├── models/             # Mapeamento e relacionamento das entidades (Sequelize)
│   ├── index.js
│   ├── personagem.js
│   └── user.js
├── rotas/              # Definição dos endpoints e gerenciamento de rotas
│   ├── auth-rotas.js
│   ├── jogo-rotas.js
│   └── token-manager.js
├── seeders/            # Dados iniciais para povoamento do banco de dados
├── .gitignore          # Arquivos ignorados pelo Git (ex: node_modules)
├── index.js            # Ponto de entrada (Entry point) da aplicação Express
├── package.json        # Dependências e scripts do projeto
└── swagger.json        # Configuração da documentação da API
```

📌 Principais Endpoints
🔐 Autenticação (/auth)

POST /auth/login — Autentica o usuário e retorna o Token JWT.

POST /auth/addUser — Cadastra um novo usuário com senha criptografada (Requer JWT).

🎮 Personagens (/personagens)
GET /personagens — Lista os personagens cadastrados.

GET /personagens/:id — Busca um personagem pelo ID.

POST /personagens — Cadastra um novo personagem.

PUT /personagens/:id — Atualiza os dados de um personagem.

DELETE /personagens/:id — Remove um personagem.
