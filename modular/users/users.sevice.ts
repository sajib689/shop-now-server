import IUser from "./users.interface"
import { Users } from "./users.model"

export const usersService = async (users: Partial<IUser>): Promise<IUser | null> => {
    try {
        const createUsers = await Users.create(users)
        return createUsers
    } catch (err) {
        throw new Error("Error")
    }
}

export const getUsersService = async (): Promise<IUser[]> => {
    try {
        const getUsers = await Users.find()
        return getUsers
    } catch (err){
        throw new Error("Error")
    }
}