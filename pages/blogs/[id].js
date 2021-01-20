import Link from "next/link";
import fetchData from "../../components/fetchData/fetchData";

function Blog(props) {
    // console.log(props.blog);
    // let blog = props.blog
    return (
        <>
            <h1>{props.blog.blog_title}</h1>
            <img src={props.blog.blog_image.url}></img>
            <p>{props.blog.blog_content}</p>
            {
                props.blog.related_links.map((link, i)=>{
                    return(
                        <div key={i}>
                            {
                                link.related_links.map((item)=>{
                                    return(
                                        <div key={item.uid}>
                                            <img src={link.link_image.url}></img>
                                            <Link href={`/blogs/${item.uid}`}>
                                                <a>{link.title}</a>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
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