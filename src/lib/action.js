"use server"

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, Responsem, User } from "./models";
import { connectToMongoDb } from "./utils";
import { redirect } from 'next/navigation'
import bcrypt from "bcryptjs";


export const Response = async (prevState, formData) => {


    const { name, email, phone, message } = Object.fromEntries(formData);
    try {
        connectToMongoDb();
        const newResponse = new Responsem({
            name,
            email,
            phone,
            message,
        });

        await newResponse.save();
        console.log('RESP SAVED');

    } catch (error) {
        return { error: "somting went wrong while adding sending message" }
    }
};

export const addPost = async (prevState, formData) => {

    const { title, dec, slug, userId, img } = Object.fromEntries(formData);
    try {
        connectToMongoDb();
        const newpost = new Post({
            title,
            dec,
            slug,
            userId,
            img,
        });

        await newpost.save();
        console.log('post created');
        revalidatePath('/blog')
        revalidatePath('/admin')

    } catch (error) {
        return { error: "somting went wrong while adding post" }
    }
};

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToMongoDb()

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const addUser = async (prevState, formData) => {
    const { username, email, password, img } = Object.fromEntries(formData);

    try {
        connectToMongoDb()
        const newUser = new User({
            username,
            email,
            password,
            img,
        });

        await newUser.save();
        console.log("saved to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deleteUser = async (prevState, formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToMongoDb()

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
};

export const handleLogout = async () => {
    "use server";
    await signOut();
};


export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        connectToDb();

        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("saved to db");

        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);



    try {
        await signIn("credentials", { username, password });
    } catch (err) {

        if (err.message.includes("NEXT_REDIRECT")) {
            redirect('/login')
        }

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }

        // throw err;
    }

};
