const express = require('express');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const professorRoutes = require('./routes/professorRoutes');
const alunoRoutes = require('./routes/alunoRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'segredo-local',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRoutes);
app.use('/professor', professorRoutes);
app.use('/aluno', alunoRoutes);

app.use((req, res) => res.status(404).send('<h1>404</h1><p>Página não encontrada.</p><a href="/">Voltar</a>'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
