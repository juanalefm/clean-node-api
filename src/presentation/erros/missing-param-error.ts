export class MissingParamError extends Error {
  constructor (paramName: string) {
    /*
      As classes que herdam de Error tem que chamar
      super
    */
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
