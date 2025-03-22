
import { IUser } from "./users.interface";
import { Users } from "./users.model"
import bcrypt from "bcryptjs";

export const usersService = async (users: Partial<IUser>): Promise<IUser | null> => {
    try {
        if(!users.password) {
            throw new Error("Password is required")
        }
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(users.password, salt)
        const newUser = {
            ...users,
            password: hashedPassword
        }
        const createUser = await Users.create(newUser)
        return createUser
    } catch (err) {
        throw new Error("Error")
    }
}
export const loginUsersService = async (email: string): Promise<IUser | null> => {
    try {
        const users = await Users.findOne({email})
        return users
    } catch (err) {
        throw new Error("Error")
    }
}
// get all users
export const getUsersService = async (): Promise<IUser[]> => {
    try {
        const getUsers = await Users.find()
        return getUsers
    } catch (err){
        throw new Error("Error")
    }
}
// delete user
export const deleteUsersService = async (email: string): Promise<IUser | null> => {
    try {
        const deleteUser = await Users.findOneAndDelete({email})
        return deleteUser

    } catch (err) {
        throw new Error("Error")
    }
}