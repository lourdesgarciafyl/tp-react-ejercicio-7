import { ListGroup } from "react-bootstrap";
import BloqueEmpleado from "./BloqueEmpleado";

const ListaEmpleados = () => {
    return(
        <ListGroup className="my-3">
            <BloqueEmpleado className="my-1"></BloqueEmpleado>
        </ListGroup>
    )
}

export default ListaEmpleados;