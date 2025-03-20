import { model, Model, Schema } from "mongoose";
import IUser from "./users.interface";

type usersModel = Model<IUser, object>
export const usersSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
    },
    photo: {
        type: String,
    },

})

export const Users = model<IUser, usersModel>("Users", usersSchema);