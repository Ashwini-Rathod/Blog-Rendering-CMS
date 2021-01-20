import Navigation from "./Navbar";

const Layout = (props) =>{
    return (
        <>
            <Navigation/>
            {props.children}
        </>
    )
}

export default Layout;