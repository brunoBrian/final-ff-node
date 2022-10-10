import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

export interface IUser {
    id: string;
    name: string;
}