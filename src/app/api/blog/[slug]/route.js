import { Post } from "@/lib/models";
import { connectToMongoDb } from "@/lib/utils";

export const GET = async (req, { params }) => {

    const { slug } = params;

    try {
        connectToMongoDb();

        const post = await Post.findOne({ slug })
        return NextResponse.json(post)

    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!");
    }
}

export const DELETE = async (req, { params }) => {

    const { slug } = params;

    try {
        connectToMongoDb();

        await Post.deleteOne({ slug })
        return NextResponse.json("post deleted")

    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete post!");
    }
}