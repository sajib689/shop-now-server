import { model, Model, Schema } from "mongoose";
import { IUser } from "./users.interface";

type usersModel = Model<IUser, object>
export const usersSchema = new Schema({
    _id: {
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
    createdAt: {
        type: Date,
        default: Date.now(),
    }

})

export const Users = model<IUser, usersModel>("Users", usersSchema);