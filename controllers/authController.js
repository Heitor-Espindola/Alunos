const model = require('../models/dataModel');

function login(req, res) {
  const { usuario, senha, tipo } = req.body;

  // Impede trocar de perfil enquanto a sessão atual estiver ativa.
  if (req.session.usuario) return res.status(403).send('Já existe uma sessão ativa. <a href="/logout">Sair</a>');
  const user = model.autenticar(usuario, senha, tipo);

  if (!user) return res.status(401).send('Login inválido. <a href="/">Voltar</a>');

  // Garante que somente uma sessão de perfil fique ativa por vez.
  req.session.usuario = { id: user.id, nome: user.nome, tipo: user.tipo };
  res.redirect(tipo === 'professor' ? '/professor' : '/aluno');
}

function logout(req, res) {
  req.session.destroy(() => res.redirect('/'));
}

module.exports = { login, logout };
