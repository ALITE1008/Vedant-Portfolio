import { Post, User } from "./models";
import { connectToMongoDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";




export const getPosts = async () => {
    try {
        connectToMongoDb()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fecth posts!")
    }
}

export const getPost = async (slug) => {
    try {
        connectToMongoDb()
        const post = await Post.findOne({ slug })
        return post
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fecth post!")
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectToMongoDb()
        const user = await User.findById({ id })
        return user
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fecth user!")
    }
}

export const getUsers = async () => {
    try {
        connectToMongoDb()
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fecth users!")
    }
}