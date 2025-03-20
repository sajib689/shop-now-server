import express from "express"
import { getUsersController, loginUsersController, usersController } from "./users.controller"

const usersRouter = express.Router()

usersRouter.post('/register', usersController)
// http://localhost:5000/api/v1/users

usersRouter.get('/users', getUsersController)
// http://localhost:5000/api/v1/users
usersRouter.post('/login', loginUsersController)
// http://localhost:5000/api/v1/login

export default usersRouter;