import Layout from "../components/Navigation/Layout";
import Head from "next/head";
import Carousel from "react-bootstrap/Carousel";
import styles from "../scss/_main.module.scss";
import Button from "react-bootstrap/Button";

function Home(props) {
  return (
    <>
      <div>
      <Layout>
        <Head>
          <title>Home Page</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
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
              <Button href="/blogs">Discover More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles["container"]} interval={3000}>
            <img
              className="d-block w-100 h-100"
              src = "https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fHRyYXZlbCUyMGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
            <Button href="/blogs">Discover More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={styles["container"]} interval={3000}>
            <img
              src="https://images.unsplash.com/photo-1610551909432-6ce544bdc2b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbCUyMGdpcmx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              className="d-block w-100 h-100"
              alt="Third slide"
            />

            <Carousel.Caption>
            <Button href="/blogs" variant="primary">Discover More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </>
  )
}

export default Home
