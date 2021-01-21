import fetchData from "../../components/fetchData/fetchData";
import Layout from "../../components/Navigation/Layout";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import styles from "../../scss/Gallery/gallery.module.scss";

const Images = (props) => {
  return (
    <>
      <div>
        <Layout header={props.header}>
          <Head>
            <title>Gallery</title>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossOrigin="anonymous"
            />
          </Head>
        </Layout>
      </div>
      {props.images.gallery.map((images, i) => {
        return (
          <div className={styles["main"]} key={i}>
            <h1 className={styles["title"]}>{images.topic}</h1>
            <div className={styles["container"]}>
              {images.images.map((image, i) => {
                return (
                  <div key={i} className={styles["img-container"]}>
                    <img src={image.url}></img>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <Footer footer={props.footer}/>
    </>
  );
};

export const getStaticProps = async () => {
  let images = await fetchData("blog_rendering_gallery", "blt7b638ade068ba0be");
  let header = await fetchData("blog_rendering_header", "blt0adede8ddcec463f");
  let footer = await fetchData("blog_rendering_footer", "blt09163fa35d483714");
  return {
    props: {
      images: { ...images },
      header : {...header},
      footer : {...footer}
    },
  };
};

export default Images;
