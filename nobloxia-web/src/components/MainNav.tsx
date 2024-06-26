import { Navbar, Container } from "react-bootstrap";
import LogoText from "../assets/nobloxia_text_trimmed.png";

function MainNav() {
    return (
        <Navbar
            sticky="top"
            variant="dark"
            className="nav-orange"
        >
            <Container className="justify-content-center">
                <Navbar.Brand href="#">
                    <img
                        alt="Nobloxia!"
                        src={LogoText}
                        height="48"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default MainNav;
