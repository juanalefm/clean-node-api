export class SignUpController {
  // nome da funcao (parametro : tipo de parametro ) : tipo de retorno
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statuscode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statuscode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
