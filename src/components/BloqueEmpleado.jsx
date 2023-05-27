import {Row, Col, ListGroup, ListGroupItem} from  "react-bootstrap";

const BloqueEmpleado = ({propEmpleado}) => {
    const {id,fullName, title, department, pic} = {...propEmpleado}
    return (
        <ListGroup.Item>
            <Row>
                <Col sm={2} md={4} className="mt-4 text-center">
                    <img
                    src={pic}
                    alt="foto del empleado"
                    className="rounded-circle imgEmpleado"
                    />
                </Col>
                <Col sm={4} md={8} className="mt-5">
                    <h4 className="fs-5">{fullName}</h4>
                    <p className="lead fs-6">{title}<span className="ms-2 badge badge-info text-bg-info">{department}</span></p>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default BloqueEmpleado;