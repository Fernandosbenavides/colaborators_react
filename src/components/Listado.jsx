import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Listado = ({ data, setData, dataFilter, setDataFilter }) => {

  const handleDelete = (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que quieres eliminar este colaborador?");
    if (confirmacion) {
      const newData = data.filter(usuario => usuario.id !== id);
      setData(newData);
      setDataFilter(newData);
    }
  };

  const usuarios = dataFilter.map((usuario) => (
    <tr key={usuario.id} className='align-middle'>
      <td>{usuario.id}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.correo}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.cargo}</td>
      <td>{usuario.telefono}</td>
      <td>
        <Button variant="danger" onClick={() => handleDelete(usuario.id)}>Eliminar</Button>
      </td>
    </tr>
  ));

  return (
    <Table className='table table-striped'responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {usuarios}
      </tbody>
    </Table>
  );
}

export default Listado;
