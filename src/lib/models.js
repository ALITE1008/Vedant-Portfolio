import mongoose from "mongoose";

const userSchmea = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        min: 4,
        max: 20,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        // require: true,
        min: 6
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true });

const postSchmea = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    dec: {
        type: String,
        require: true,
    },
    img: {
        type: String
    },
    userId: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
        require: true,
        unique: true,
    },

}, { timestamps: true });

const resSchmea = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        require: true,
    },

}, { timestamps: true });

export const User = mongoose.models?.User || mongoose.model("User", userSchmea)
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchmea)
export const Responsem = mongoose.models?.Responsem || mongoose.model("Responsem", resSchmea)