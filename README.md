# Sistema de Notas de Alunos

Sistema simples feito com **Node.js + Express + EJS + JSON**, organizado no padrão MVC.

## Como executar

1. Instale o Node.js.
2. Abra o terminal nesta pasta.
3. Execute:

```bash
npm install
npm start
```

4. Acesse `http://localhost:3000`.

## Credenciais

**Professor**
- Usuário: `professor`
- Senha: `1234`

**Aluno 1**
- Usuário: `joao`
- Senha: `1234`

**Aluno 2**
- Usuário: `maria`
- Senha: `1234`

## Estrutura MVC

- `models/`: leitura e gravação do JSON.
- `controllers/`: regras do sistema.
- `routes/`: rotas HTTP.
- `views/`: telas HTML/EJS.
- `public/`: CSS.
- `app.js`: configuração do servidor e sessões.
