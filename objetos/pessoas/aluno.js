class Aluno {

  #matricula; // visibilidade é privada 
  #curso;
  #escola;

  setMatricula(matricula)
  {

    this.#matricula = matricula;
  }

  getMatricula() 
  {
    return this.#matricula;
  }

  setCurso(curso)
   {
  this.#curso = curso;

   }

  getCurso (){

    return this.#curso;
   }

setEscola ( escola)
 {
  this.#escola = escola;

}

getEscola() {
  return this.#escola;
  
}

module.exports = Aluno; 