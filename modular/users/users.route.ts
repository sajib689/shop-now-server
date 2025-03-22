import express from "express"
import { deleteUsersController, getUsersController, loginUsersController, usersController } from "./users.controller"
import { asyncHandler } from './../../middlewares/asyncHandler';

const usersRouter = express.Router()

usersRouter.post('/register', asyncHandler(usersController))
// http://localhost:5000/api/v1/register
usersRouter.post('/login', asyncHandler(loginUsersController))
// http://localhost:5000/api/v1/login
usersRouter.get('/users', asyncHandler(getUsersController))
// http://localhost:5000/api/v1/users
usersRouter.delete('/deleteuser/:email', asyncHandler(deleteUsersController))
// http://localhost:5000/api/v1/deleteuser

export default usersRouter;