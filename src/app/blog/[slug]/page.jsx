import { getPost } from "@/lib/data";
import styles from "./singlepage.module.css";
import Image from "next/image";

// const getData = async (slug) => {

//   if(slug){
//     const res = await fetch(`${process.env.DOMAIN}/api/blog/${slug}`);
    
//     if (!res.ok) {
//       console.log("somthing is wrong in getdata api in slug");
//     }
    
//     return res.json();
//   }
// };

export const genrateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  // const post = await getData(slug);

  return {
    title: post?.title,
    description: post?.body.slice(0, 30),
  };
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgcon}>
        <Image
          src={
            post.img ||
            "https://images.pexels.com/photos/18898418/pexels-photo-18898418/free-photo-of-close-up-of-a-branch-with-green-and-yellow-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textcon}>
        <h4>{post?.updatedAt.toString().slice(4, 16)}</h4>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.des}>{post.dec}</p>
      </div>
    </div>
  );
};

export default SinglePage;
