import fetchData from "../../components/fetchData/fetchData";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Navigation/Layout";
import styles from "../../scss/Blogs/blogs.module.scss";
import { Button } from "react-bootstrap";

function Blogs(props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Blogs</title>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                        crossOrigin="anonymous"
                    />
                </Head>
            </Layout>
            <div className={styles["blog-container"]}>

                {
                    props.blogs.map((blog) => {
                        return (
                            <div key={blog.uid} className={styles["blog-card"]}>
                                <Link href={`/blog/${blog.uid}`}>
                                  <a className={styles["blog-title"]}><h2 >{blog.blog_title}</h2></a>
                                </Link>
                                <img src={blog.blog_image.url}></img>
                                <div className={styles["best-time"]}>
                                    <span className={styles["span-lhs"]}>Best Time: </span>
                                    <span>{blog.author_name}</span>
                                </div>
                                <div className={styles["btn"]}>
                                   <Button href={`/blogs/${blog.uid}`} variant="danger">Read More</Button>
                                </div>
                            </div>
                        )
                    })

                }
            </div>

        </>
    )
}

export const getStaticProps = async () => {
    let Blogs = await fetchData("blog_rendering").then(function success(result) {
        return result;
    });

    return {
        props: {
            blogs: [...Blogs[0]],
        },
    };
};

export default Blogs;
