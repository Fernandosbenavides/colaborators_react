import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

import { BaseColaboradores } from './assets/BaseColaboradores';
import Listado from "./components/Listado"
import Formulario from "./components/Formulario"
import Buscador from "./components/Buscador"
import Alerta from "./components/Alerta"

export const App = () => {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);
  const [alerta, setAlerta] = useState({ tipo: null, mensaje: '' });

  const agregarColaborador = (nuevoColaborador) => {
    let nuevoId = 1;
    const idsExistentes = data.map(colaborador => parseInt(colaborador.id));
    while (idsExistentes.includes(nuevoId)) {
      nuevoId++;
    }
    nuevoColaborador.id = nuevoId.toString();
    setData([...data, nuevoColaborador]);
    setDataFilter([...dataFilter, nuevoColaborador]);
    setAlerta({ tipo: 'success', mensaje: 'Colaborador agregado correctamente.' });
  };

  return (
    <Container className="mt-2">
      <h1 className='mb-4'><FontAwesomeIcon icon={faPeopleGroup} /> Lista de Colaboradores</h1>
      <Row>
        <Col md={8}>
          <Buscador data={data} dataFilter={setDataFilter} />
          <div className="mt-4">
            <Listado data={data} setData={setData} dataFilter={dataFilter} setDataFilter={setDataFilter} />
          </div>
        </Col>
        <Col md={4}>
          <div className='myform'>
            <Formulario agregarColaborador={agregarColaborador} setAlerta={setAlerta} data={data} />
            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
