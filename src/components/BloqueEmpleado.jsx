import {Row, Col, ListGroup, ListGroupItem} from  "react-bootstrap";

const BloqueEmpleado = () => {
    return (
        <ListGroup.Item>
            <Row>
                <Col sm={3} md={4}>
                    <img>
                    </img>
                </Col>
                <Col sm={9} md={8}>
                    <h4> </h4>
                    <h5> </h5>
                    <span className="badge badge-info"></span>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default BloqueEmpleado