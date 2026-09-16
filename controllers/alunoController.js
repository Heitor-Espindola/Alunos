const model = require('../models/dataModel');

function autenticar(req, res, next) {
  if (!req.session.usuario || req.session.usuario.tipo !== 'aluno') return res.redirect('/');
  next();
}

function painel(req, res) {
  const aluno = model.listarAlunos().find(a => a.id === req.session.usuario.id);
  res.render('aluno', { nome: aluno.nome, nota: model.notaDoAluno(aluno.id) });
}

module.exports = { autenticar, painel };
