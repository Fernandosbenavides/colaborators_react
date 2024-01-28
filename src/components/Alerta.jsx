import Alert from 'react-bootstrap/Alert';
const Alerta = ({ tipo, mensaje }) => {
    return (
        <>
            {tipo === 'warning' && <Alert variant="warning">{mensaje}</Alert>}
            {tipo === 'success' && <Alert variant="success">{mensaje}</Alert>}
        </>
    );
}
export default Alerta;