import express from 'express'
import authController from '../controllers/auth'
import { verifyToken } from '../middleware'

const router = express.Router()

router.route('/')
    .post(authController.token)
    .get(verifyToken, authController.getUsers)

router.route('/:id')
    .get(authController.userById)

export default router