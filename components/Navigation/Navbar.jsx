import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../scss/_main.module.scss";

const Navigation = (props) => {
    return (
        <>
            <Navbar variant = "light" bg = "light" className="d-flex justify-content-center">          
                <Nav fill className="justify-content-center mb-2 mt-2 align-items-center text"> 
                    <Nav.Link href="/" className="ml-3 mr-3">Home</Nav.Link>
                    <Nav.Link href="/blogs" className="ml-3 mr-3">Blogs</Nav.Link>
                    <Navbar.Brand className="ml-5 mr-5 text-primary traveller ">
                        The Traveller
                    </Navbar.Brand>
                    <Nav.Link href="/gallery" className="ml-3 mr-3">Gallery</Nav.Link>
                    <Nav.Link href="/about" className="ml-3 mr-3">About</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navigation;