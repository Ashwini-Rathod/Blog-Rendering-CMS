import Navigation from "./Navbar";
const Layout = (props) =>{
    return (
        <>
            <Navigation header={props.header}/>
            {props.children}
        </>
    )
}

export default Layout;