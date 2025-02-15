# Projeto Next Call

Este é o repositório do projeto **Next Call**, um aplicativo de agendamento de chamadas e gestão de usuários.

## 🚀 Tecnologias
- **Next.js** – Framework React para renderização do lado do servidor.
- **TypeScript** – Tipagem estática para evitar erros.
- **Prisma** – ORM para interação com o banco de dados.
- **MySQL** – Banco de dados relacional.

## ⚙️ Funcionalidades
- Cadastro de usuários
- Agendamento de chamadas
- Visualização e gerenciamento de bloqueios de datas
- Estruturação de banco de dados com MySQL

## 💻 Como rodar o projeto
### 1️⃣ Clonar o repositório:
```bash
git clone https://github.com/Murillou/next-call.git
cd next-call
```

### 2️⃣ Instalar as dependências:
```bash
npm install
```

### 3️⃣ Configurar o banco de dados:
Crie o arquivo `.env` com as variáveis para o MySQL:
```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

### 4️⃣ Rodar as migrations:
```bash
npx prisma migrate dev
```

### 5️⃣ Iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse em: [http://localhost:3000](http://localhost:3000)

---
**Feito com ❤️ por Murillo Vinícius!!**

