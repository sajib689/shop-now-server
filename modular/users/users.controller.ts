import { Request, Response } from "express"
import { getUsersService, usersService } from "./users.sevice"

export const usersController = async(req: Request, res: Response) => {
    try {
        const users = req.body
    const result = await usersService(users)
    res.status(200).json({
        message: "Successfully created user",
        status: "success",
        data: result
    })
    } catch (err) {
        throw new Error("Error")
    }
}

export const getUsersController = async(req: Request, res: Response) => {
    try {
        const result = await getUsersService()
        res.status(200).json({
            message: "Successfully get users",
            status: "success",
            data: result
        })
    } catch (err) {
        throw new Error("Error")
    }
}