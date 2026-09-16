const fs = require('fs');
const path = require('path');

const file = process.env.DATA_FILE || path.join(__dirname, 'data.json');

function ler() {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function salvar(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function autenticar(usuario, senha, tipo) {
  return ler().usuarios.find(u => u.usuario === usuario && u.senha === senha && u.tipo === tipo);
}

function listarAlunos() {
  return ler().usuarios.filter(u => u.tipo === 'aluno');
}

function salvarNota(alunoId, nota) {
  const data = ler();
  const existente = data.notas.find(n => n.alunoId === alunoId);
  if (existente) existente.nota = nota;
  else data.notas.push({ alunoId, nota });
  salvar(data);
}

function notasDosAlunos() {
  const data = ler();
  return listarAlunos().map(aluno => ({
    ...aluno,
    nota: data.notas.find(n => n.alunoId === aluno.id)?.nota ?? null
  }));
}

function notaDoAluno(alunoId) {
  const data = ler();
  return data.notas.find(n => n.alunoId === alunoId)?.nota ?? null;
}

module.exports = { autenticar, listarAlunos, salvarNota, notasDosAlunos, notaDoAluno };
