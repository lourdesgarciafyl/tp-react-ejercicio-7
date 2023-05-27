import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
function App() {

  return (
    <>
    <Container id='containerPrincipal'>
      <h1 className='text-center display-2'>Lista de empleados</h1>
    
    </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
