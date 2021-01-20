import fetchData from "../components/fetchData/fetchData";
import Link from "next/link";

function Home(props) {
  // console.log("Blogs: ",props.blogs);
  let links = props.blogs[0].related_links;
  // console.log(links);
  return (
    <div >
      <h1>Blogs</h1>
      <div>
        {
          props.blogs.map((blog)=>{
            return(
              <div key={blog.uid}>
                <Link href={`/blogs/${blog.uid}`}>
                  <a><h2>{blog.blog_title}</h2></a>
                </Link>
                <img src={blog.blog_image.url}></img>
                <div>
                  <span>Best Time: </span>
                  <span>{blog.author_name}</span>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* <h2>Related Posts</h2>
      {
        links.map((link, i)=>{
          return(
            <div key={i}>
              {
                link.related_links.map((item)=>{
                  return(
                    <div key={item.uid} >
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
     
        }) */}
    </div>
  )
}

export const getStaticProps = async () => {
  let Blogs = await fetchData("blog_rendering").then(function success(result) {
    return result;
  });

  return {
    props: {
      blogs : [...Blogs[0]],
    },
  };
};

export default Home;
