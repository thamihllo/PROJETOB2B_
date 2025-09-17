const PF = require("./PF"); 
const Disciplina = require('./Disciplina');

class Aluno extends PF {
  #matricula;
  #curso;
  #disciplina;

  // começa com '20' E ter 8 caracteres
  setMatricula(matricula) {
    if (matricula) {
      if ((matricula.length === 8) && (matricula.startsWith("20"))) {
        this.#matricula = matricula;
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  getMatricula(matricula) {
    return this.#matricula;
  }

  // curso tem que ser SI ou ADS
  setCurso(curso) {
    if (curso) {
      if ((curso === 'SI') || (curso === 'ADS')) {
        this.#curso = curso;
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  getCurso(curso) {
    return this.#curso;
  }
}
  setDisciplina (disciplina)
  {
    this.#disciplina = disciplina;
  }
  getDisciplina (disciplina)
   {
   return this.#disciplina; 
   }
  


module.exports = Aluno;


const aluno = new Aluno();
aluno.setNome('dantas');

const disciplina = new Disciplina();
disciplina.setNome('FrontEnd');

aluno.setDisciplina(disciplina);
console.log(aluno.getDisciplina().getNome());

aluno.setCPF('123.456.789-19');

var resposta = aluno.setMatricula('20251234');
console.log('Set matricula:', resposta);

resposta = aluno.setCurso('ADS');
console.log('Set curso:', resposta);

console.log('Matrícula:', aluno.getMatricula());
console.log('Curso:', aluno.getCurso());
