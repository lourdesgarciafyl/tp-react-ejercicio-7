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
                    <h4 className="fs-5"> Nombre</h4>
                    <p className="lead fs-6"> Puesto <span className="ms-2 badge badge-info text-bg-info">Departamento</span></p>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default BloqueEmpleado