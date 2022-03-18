import { HttpResponse } from '../protocols/http'

// arrow function com ({}) não precisa colocar o return
export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
