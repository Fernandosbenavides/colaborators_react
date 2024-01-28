import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';


function Formulario({ agregarColaborador, setAlerta }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setAlerta({ tipo: 'warning', mensaje: 'Por favor completa todos los campos.' });
      return;
    }

    const nuevoColaborador = { nombre, correo, edad, cargo, telefono };
    agregarColaborador(nuevoColaborador);
    // Restablecer los campos del formulario después de agregar el colaborador
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    <Form onSubmit={handleSubmit} className='text-center mb-2'>
      <h3 className="mb-4" ><FontAwesomeIcon icon={faUserPlus}/>Agregar colaborador</h3>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Nombre del colaborador" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Email del colaborador" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Control type="number" placeholder="Edad del colaborador" value={edad} onChange={(e) => setEdad(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPosition">
        <Form.Control type="text" placeholder="Cargo del colaborador" value={cargo} onChange={(e) => setCargo(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Control type="tel" placeholder="Teléfono del colaborador" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </Form.Group>
      <Button variant="success" type="submit" size='lg'>
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;
