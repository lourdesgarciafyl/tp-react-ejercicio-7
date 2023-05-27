import {Row, Col, ListGroup, ListGroupItem} from  "react-bootstrap";

const BloqueEmpleado = ({propEmpleado}) => {
    const {id,fullName, title, departament, pic} = {...propEmpleado}
    return (
        <ListGroup.Item>
            <Row>
                <Col sm={3} md={4}>
                    <img
                    src={pic}
                    alt="foto del empleado"
                    className="rounded-circle imgEmpleado"
                    />
                </Col>
                <Col sm={9} md={8}>
                    <h4 className="fs-5">{fullName}</h4>
                    <p className="lead fs-6">{title}<span className="ms-2 badge badge-info text-bg-info">{departament}</span></p>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default BloqueEmpleado;