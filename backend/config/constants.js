export const HTTP_STATUS = {
  ok: { code: 200, text: 'OK' },
  created: { code: 201, text: 'Created' },
  not_found: { code: 404, text: 'Not Found (404)' },
  internal_server_error: { code: 500, text: 'Internal Server Error (500)' }
}

export const MIDDLEWARE_STATUS = {
  unauthorized: {
    code: 401,
    text: {
      op0: 'Incorrect username or password.',
      op1: 'Token not provided.',
      op2: 'Invalid token format.',
      op3: 'Invalid token.'
    }
  }
}
