import { jwtVerify } from '../../utils/jwt.js'
import { MIDDLEWARE_STATUS } from '../../config/constants.js'

const verifyToken = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    return res.status(MIDDLEWARE_STATUS?.unauthorized?.code || 401).json(MIDDLEWARE_STATUS?.unauthorized?.text?.op1 || 'No estás autorizado')
  }

  const [bearer, token] = authorizationHeader.split(' ')

  if (bearer !== 'Bearer' || !token) {
    return res.status(MIDDLEWARE_STATUS?.unauthorized?.code || 401).json(MIDDLEWARE_STATUS?.unauthorized?.text?.op2 || 'No estás autorizado')
  }

  try {
    const r = await jwtVerify(token)
    if (!r) {
      return res.status(MIDDLEWARE_STATUS?.unauthorized?.code || 401).json(MIDDLEWARE_STATUS?.unauthorized?.text?.op3 || 'No estás autorizado')
    }
    req.user = r
    next()
  } catch (error) {
    console.error('Error al verificar el token:', error)
    return res.status(MIDDLEWARE_STATUS?.unauthorized?.code || 401).json(MIDDLEWARE_STATUS?.unauthorized?.text?.op3 || 'No estás autorizado')
  }
}

export default verifyToken
