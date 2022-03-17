export class SignUpController {
  // nome da funcao (parametro : tipo de parametro ) : tipo de retorno
  handle (httpRequest: any): any {
    return {
      statuscode: 400,
      body: new Error('Missing param: name')
    }
  }
}
