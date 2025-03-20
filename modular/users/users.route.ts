import express from "express"
import { usersController } from "./users.controller"

const usersRouter = express.Router()

usersRouter.post('/users', usersController)
// http://localhost:5000/api/v1/users

export default usersRouter;