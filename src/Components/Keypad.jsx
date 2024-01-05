import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Column from 'react-bootstrap/Column'

function Keypad() {
    
    return ( 

    <Container className="bg-black">
    <Row>
        <Col xs="8"></Col>
        <Col></Col>
        <Col></Col>
    </Row>
    <Row>
        <Col xs="8"></Col>
        <Col></Col>
        <Col></Col>
    </Row>
    </Container>

     );
}

export default Keypad;