import Postcard from "@/components/postcard/Postcard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: " Project Page page  ",
  description: "projects",
};

// const getData = async () => {
//   const res = await fetch(`${process.env.DOMAIN}/api/blog`);

//   if (!res.ok) {
//     console.log("somthing is wrong in getdata api");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  // const posts = await getData();

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post._id}>
            <Postcard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
