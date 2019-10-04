module.exports = class Persona {

  constructor(nombre, apellido, email, sexo) {
    this.nombre = nombre
    this.apellido = apellido
    this.email = email
    this.sexo = sexo
  }

  //Todo esto en js es totalmente innecesario 
  // get nombre() {
  //   return this.nombre
  // }

  // set nombre(value) {
  //   this.nombre = value
  // }

  // get apellido() {
  //   return this.apellido
  // }

  // set apellido(value) {
  //   this.apellido = value
  // }

  // get email() {
  //   return this.email
  // }

  // set email(value) {
  //   this.email = value
  // }

  // get sexo() {
  //   return this.sexo
  // }

  // set sexo(value) {
  //   this.sexo = value
  // }

  toString() {
    return "Nombre: " + this.nombre + ", Apellido: " + this.apellido + ", email: " + this.email + ", sexo: " + this.sexo
  }
}