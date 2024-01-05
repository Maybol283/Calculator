import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./Keypad.css"

function Keypad() {
    
    return ( 

    <Container className="bg-subtle container1">
    <Row>
        <Col xs={6} className='border border-danger'>AC</Col>
        <Col className='border border-danger'>/</Col>
        <Col className='border border-danger'>X</Col>
    </Row>
    <Row>
        <Col className='border border-danger'>1</Col>
        <Col className='border border-danger'>2</Col>
        <Col className='border border-danger'>3</Col>
        <Col className='border border-danger'>+</Col>
    </Row>
    <Row>
        <Col className='border border-danger'>4</Col>
        <Col className='border border-danger'>5</Col>
        <Col className='border border-danger'>6</Col>
        <Col className='border border-danger'>-</Col>
    </Row>
    <Row>
        <Col className='border border-danger'>7</Col>
        <Col className='border border-danger'>8</Col>
        <Col className='border border-danger'>9</Col>
        <Col className='border border-danger'>.</Col>
    </Row>
    <Row>
        <Col className='border border-danger'>0</Col>
        <Col className='border border-danger'>=</Col>
    </Row>
    </Container>

     );
}

export default Keypad;