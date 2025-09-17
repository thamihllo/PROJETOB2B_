class Disciplina {
  #nome;

  setNome(nome) {
    if (nome) {
      this.#nome = nome;
    } else {
    }
  }

  getNome() {
    return this.#nome;
  }
}
module.exports = Disciplina