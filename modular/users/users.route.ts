import express from "express"
import { usersController } from "./users.controller"

const usersRouter = express.Router()

usersRouter.post('/users', usersController)

export default usersRouter;