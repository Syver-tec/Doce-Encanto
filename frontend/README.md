# 🍰 Doce Encanto

Sistema web de confeitaria desenvolvido para estudo e portfólio, permitindo que clientes realizem pedidos de doces e bebidas de forma prática e intuitiva.

## 📸 Demonstração

Em breve...

---

# ✨ Funcionalidades

## 👤 Usuários
- Cadastro de usuários
- Login com autenticação JWT
- Logout
- Perfil do usuário
- Atualização de dados pessoais
- Upload de foto de perfil

## 🍰 Cardápio
- Listagem de produtos
- Busca de produtos
- Filtro por categorias
- Categorias:
  - Bolos
  - Cafés
  - Doces
  - Salgados
  - Bebidas

## ❤️ Favoritos
- Adicionar produtos aos favoritos
- Visualizar lista de favoritos

## 🛒 Carrinho
- Adicionar produtos
- Remover produtos
- Alterar quantidade
- Persistência do carrinho com LocalStorage

## 📦 Pedidos
- Finalizar pedido
- Histórico de pedidos
- Visualizar itens do pedido
- Cancelar pedidos

---

# 🛠 Tecnologias Utilizadas

## Frontend
- React
- React Router DOM
- Tailwind CSS
- Axios
- SweetAlert2
- React Hot Toast

## Backend
- Node.js
- Express
- JWT
- Multer
- bcrypt

## Banco de Dados
- MySQL

---

# 📂 Estrutura do Projeto

## Frontend

```txt
src/
├── components/
├── contexts/
├── pages/
├── services/
├── assets/
├── App.jsx
└── main.jsx
```

## Backend

```txt
src/
├── config/
├── controllers/
├── middlewares/
├── routes/
├── app.js
└── server.js
```

---

# 🚀 Como Executar

## Backend

```bash
npm install
npm run dev
```

Crie um arquivo `.env`:

```env
PORT=5000
JWT_SECRET=sua_chave_secreta

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=doce_encanto
```

---

## Frontend

```bash
npm install
npm run dev
```

Crie um arquivo `.env`:

```env
VITE_API_URL=http://localhost:5000
```

---

# 🗄 Banco de Dados

Importe o arquivo:

```txt
database.sql
```

para criar todas as tabelas necessárias.

---

# 📱 Funcionalidades Futuras

- Visualização detalhada dos produtos
- Sistema de avaliações
- Cupons de desconto
- Integração com pagamento
- Painel administrativo

---

# 📷 Screenshots

Adicione imagens do projeto aqui.

---

# 👨‍💻 Autor

José Lima - Syver

Desenvolvido com React, Node.js e MySQL para fins de estudo e portfólio.