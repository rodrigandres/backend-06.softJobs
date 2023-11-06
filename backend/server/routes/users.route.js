import express from 'express'
import * as usuarios from '../controllers/users.controller.js'
import verifyToken from '../middlewares/users.middlewares.js'

const router = express.Router()

router.post('/usuarios', usuarios.registerUser)
router.post('/login', usuarios.login)

router.get('/usuarios', verifyToken, usuarios.returnUser)

export default router
