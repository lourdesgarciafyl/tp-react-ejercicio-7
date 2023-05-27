import { ListGroup } from "react-bootstrap";
import BloqueEmpleado from "./BloqueEmpleado";
import {empleados} from "./arrayEmpleados"

const ListaEmpleados = () => {
    return(
        <ListGroup className="my-3">
            {empleados.map((empleado) => (
                <BloqueEmpleado className="my-1" propEmpleado={empleado}></BloqueEmpleado>
            ))}
        </ListGroup>
    )
}

export default ListaEmpleados;