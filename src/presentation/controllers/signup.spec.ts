import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    // esperamos que dentro do httpResponse tenha um statuscode que seja 400
    expect(httpResponse.statuscode).toBe(400)
    /*  toBe quando compara objetos eles tem que ser identicos,
    nesse caso estamos comparando um obejto tipo body e outro tipo Error,
    então vamos usar o toEqual que comparamos somente os valores para ver
    se são iguais
    */
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })
})
