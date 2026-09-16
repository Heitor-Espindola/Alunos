const model = require('../models/dataModel');

function autenticar(req, res, next) {
  if (!req.session.usuario || req.session.usuario.tipo !== 'professor') return res.redirect('/');
  next();
}

function painel(req, res) {
  res.render('professor', { nome: req.session.usuario.nome, alunos: model.notasDosAlunos() });
}

function salvarNota(req, res) {
  const alunoId = Number(req.body.alunoId);
  const nota = Number(req.body.nota);
  if (!Number.isFinite(nota) || nota < 0 || nota > 10) return res.status(400).send('A nota deve estar entre 0 e 10.');
  model.salvarNota(alunoId, nota);
  res.redirect('/professor');
}

module.exports = { autenticar, painel, salvarNota };
