import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../scss/_main.module.scss";

const Navigation = ({ header }) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
            <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-center">
                <Nav fill className="justify-content-center mb-2 mt-2 align-items-center text">
                    <Nav.Link href={header.nav_links[0].href} className="ml-3 mr-3">{header.nav_links[0].title}</Nav.Link>
                    <Nav.Link href={header.nav_links[1].href} className="ml-3 mr-3">{header.nav_links[1].title}</Nav.Link>
                    <Navbar.Brand className="ml-5 mr-5 text-primary traveller">
                        {header.brand.brand_name.title}
                    </Navbar.Brand>
                    <Nav.Link href={header.nav_links[2].href} className="ml-3 mr-3">{header.nav_links[2].title}</Nav.Link>
                    <Nav.Link href={header.nav_links[3].href} className="ml-3 mr-3">{header.nav_links[3].title}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;