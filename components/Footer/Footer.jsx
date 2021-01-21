import styles from "../../scss/_main.module.scss";
import { SocialIcon } from "react-social-icons";

function Footer({ footer }) {
    return (
        <>
            <hr />
            <div className={styles["footer"]} >
                <div className={styles["main"]}>
                    <h2 className="text-primary">{footer.brand_name}</h2>
                    <h6>{footer.brand_subtext}</h6>
                </div>
                <div className={styles["sm-container"]}>
                    <h5>Connect with us</h5>
                    <div className={styles["sm"]}>
                    {
                        footer.social_media_icons.map((icon, i) => {
                            return (
                                <div key={i}>
                                    <SocialIcon network={icon.title} url={icon.href} style={{ height: 30, width: 30, margin: "8px" }} ></SocialIcon>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className={styles["copyright"]}>
                <p>{footer.copyright}</p>
            </div>
        </>
    )
}

export default Footer;