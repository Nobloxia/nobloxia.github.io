import Logo from "./assets/nobloxia-house.png";
import { Container, Card, Button } from "react-bootstrap";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";

function App() {
    return (
        <div>
            <MainNav/>

            <br />

            <Container className="d-flex justify-content-center">
                <Card
                    border="light"
                    bg="dark"
                    text="white"
                    style={{ width: "18rem" }}
                >
                    <Card.Img variant="top" src={Logo} />
                    <Card.Body>
                        <Card.Title>Nobloxia</Card.Title>
                        <Card.Text>The Nobloxia Roblox group!</Card.Text>
                        <Button variant="primary" href="https://www.roblox.com/groups/32924401/Nobloxia#!about">View group!</Button>
                    </Card.Body>
                </Card>
            </Container>

            <Footer/>
        </div>
    );
}

export default App;
