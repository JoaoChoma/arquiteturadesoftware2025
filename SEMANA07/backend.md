📦project-root
 ┣ 📁src
 ┃ ┣ 📁config
 ┃ ┃ ┣ 📄database.js         # Configuração da conexão com o banco
 ┃ ┃ ┣ 📄smtp.js             # Configuração do transporte SMTP (nodemailer)
 ┃ ┃ ┗ 📄env.js              # Variáveis de ambiente centralizadas
 ┃
 ┃ ┣ 📁controllers
 ┃ ┃ ┣ 📄auth.controller.js          # Login, logout, token refresh
 ┃ ┃ ┣ 📄vendedor.controller.js      # Cadastro e gerenciamento de vendedores
 ┃ ┃ ┗ 📄notificacao.controller.js   # API de envio de notificações
 ┃
 ┃ ┣ 📁services
 ┃ ┃ ┣ 📄auth.service.js             # Regras de autenticação
 ┃ ┃ ┣ 📄vendedor.service.js         # Regras de negócio de vendedores
 ┃ ┃ ┗ 📄notificacao.service.js      # Lógica de envio de e-mails
 ┃
 ┃ ┣ 📁repositories
 ┃ ┃ ┣ 📄usuario.repository.js       # CRUD de usuários
 ┃ ┃ ┗ 📄vendedor.repository.js      # CRUD de vendedores
 ┃
 ┃ ┣ 📁models
 ┃ ┃ ┣ 📄usuario.model.js            # Modelo de usuário
 ┃ ┃ ┗ 📄vendedor.model.js           # Modelo de vendedor
 ┃
 ┃ ┣ 📁routes
 ┃ ┃ ┣ 📄auth.routes.js              # Rotas de autenticação
 ┃ ┃ ┣ 📄vendedor.routes.js          # Rotas de vendedores
 ┃ ┃ ┗ 📄notificacao.routes.js       # Rotas de notificação
 ┃
 ┃ ┣ 📁middlewares
 ┃ ┃ ┣ 📄auth.middleware.js          # Verificação de token JWT
 ┃ ┃ ┗ 📄error.middleware.js         # Tratamento de erros
 ┃
 ┃ ┣ 📁utils
 ┃ ┃ ┣ 📄emailSender.js              # Função genérica para envio de e-mail
 ┃ ┃ ┗ 📄tokenHelper.js              # Geração/validação de tokens JWT
 ┃
 ┃ ┗ 📄server.js                     # Inicialização da aplicação Express
 ┃
 ┗ 📄package.json                    # Dependências e scripts
