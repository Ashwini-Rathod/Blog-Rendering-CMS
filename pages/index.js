import Layout from "../components/Navigation/Layout";
import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import styles from "../scss/_main.module.scss";
import Button from "react-bootstrap/Button";
import fetchData from "../components/fetchData/fetchData";

function Home(props) {
  return (
    <>
      <div>
      <Layout header={props.header}>
        <Head>
          <title>Home Page</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
        </Head>
      </Layout>
      </div>
      <div >
        <Carousel className={styles["main"]}>
          <Carousel.Item className={styles["container"]} interval={3000}>
            <img
              src= "https://images.unsplash.com/photo-1599429358416-9302028dfffe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHx0cmF2ZWwlMjBnaXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100 h-100"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className={styles["caption"]}>THE WORLD IS YOURS TO EXPLORE.</h1>
              <Button href="/blogs">EXPLORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles["container"]} interval={3000}>
            <img
              className="d-block w-100 h-100"
              src = "https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fHRyYXZlbCUyMGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className={styles["caption"]}>LIFE IS ABOUT THE JOURNEY, NOT THE DESTINATION.</h1>
              <Button href="/blogs">EXPLORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles["container"]} interval={3000}>
            <img
              src="https://images.unsplash.com/photo-1610551909432-6ce544bdc2b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbCUyMGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100 h-100"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className={styles["caption"]}>DON'T LISTEN TO WHAT THEY SAY. GO SEE BY YOUSELF</h1>
            <Button href="/blogs" variant="primary">EXPLORE</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <Footer footer={props.footer}/>
    </>
  )
}

export const getStaticProps = async ()=>{
  let header = await fetchData("blog_rendering_header", "blt0adede8ddcec463f");
  let footer = await fetchData("blog_rendering_footer", "blt09163fa35d483714");
  return {
    props: {
      header : {...header},
      footer : {...footer}
    }
  }
}

export default Home
