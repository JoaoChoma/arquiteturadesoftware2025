📦frontend
 ┣ 📁public
 ┃ ┗ 📄index.html                  # HTML principal
 ┣ 📁src
 ┃ ┣ 📁assets
 ┃ ┃ ┣ 📁images                    # Logos, ícones, etc.
 ┃ ┃ ┗ 📁styles                    # CSS ou SCSS globais
 ┃
 ┃ ┣ 📁components
 ┃ ┃ ┣ 📁auth
 ┃ ┃ ┃ ┣ 📄LoginForm.jsx          # Formulário de login
 ┃ ┃ ┃ ┗ 📄RegisterForm.jsx       # Registro de usuário
 ┃ ┃ ┣ 📁vendedor
 ┃ ┃ ┃ ┗ 📄CadastroVendedor.jsx   # Formulário de cadastro de vendedor
 ┃ ┃ ┗ 📁notificacoes
 ┃ ┃ ┃ ┗ 📄NotificacaoToast.jsx   # Componente de notificação
 ┃
 ┃ ┣ 📁pages
 ┃ ┃ ┣ 📄LoginPage.jsx            # Página de login
 ┃ ┃ ┣ 📄Dashboard.jsx            # Página principal do sistema
 ┃ ┃ ┗ 📄CadastroVendedorPage.jsx # Página de cadastro de vendedor
 ┃
 ┃ ┣ 📁services
 ┃ ┃ ┣ 📄api.js                   # Configuração geral da API (axios/fetch)
 ┃ ┃ ┣ 📄auth.service.js          # Login, logout, registro
 ┃ ┃ ┣ 📄vendedor.service.js      # Cadastro e busca de vendedores
 ┃ ┃ ┗ 📄notificacao.service.js   # Enviar notificação via API
 ┃
 ┃ ┣ 📁store                      # (Opcional - Redux, Pinia, etc.)
 ┃ ┃ ┣ 📄auth.store.js
 ┃ ┃ ┗ 📄vendedor.store.js
 ┃
 ┃ ┣ 📁routes
 ┃ ┃ ┗ 📄AppRoutes.jsx            # Definição das rotas da aplicação
 ┃
 ┃ ┣ 📁utils
 ┃ ┃ ┗ 📄validators.js            # Funções de validação de formulário
 ┃
 ┃ ┗ 📄main.jsx                   # Ponto de entrada da aplicação
 ┗ 📄package.json                 # Dependências do frontend
