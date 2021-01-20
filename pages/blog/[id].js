import Link from "next/link";
import Head from "next/head";
import fetchData from "../../components/fetchData/fetchData";
import Layout from "../../components/Navigation/Layout";
import styles from "../../scss/Blog/blog.module.scss";

function Blog(props) {
    // console.log(props.blog);
    // let blog = props.blog
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
            <div className={styles["container"]}>
                <div className={styles["blog-information"]}>
                    <h1>{props.blog.blog_title}</h1>
                    <img src={props.blog.blog_image.url}></img>
                    <p>{props.blog.blog_content}</p>
                </div>
                <div className={styles["related-posts"]}>
                    <h1>Related Posts</h1>
                    {
                        props.blog.related_links.map((link, i) => {
                            return (
                                <div key={i} className={styles["blog-card-container"]}>
                                    {
                                        link.related_links.map((item) => {
                                            return (
                                                <div key={item.uid} className={styles["blog-card"]}>
                                                    <img src={link.link_image.url}></img>
                                                    <Link href={`/blog/${item.uid}`}>
                                                        <a><h6 className={styles["title"]}>{link.title}</h6></a>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    // console.log("Context", context);
    let blog = await fetchData("blog_rendering", `${context.params.id}`);
    return {
        props: {
            blog: { ...blog },
        },
    };
}

export const getStaticPaths = async () => {
    let Blogs = await fetchData("blog_rendering").then(function success(result) {
        return result;
    });

    let paths = Blogs[0].map((blog) => {
        return {
            params: {
                id: blog.uid.toString(),
            }
        }
    });
    // console.log(paths);
    return {
        paths,
        fallback: false,
    }
}

export default Blog;