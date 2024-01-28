import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Buscador = ({ data, dataFilter }) => {
    const inputHandler = (e) => {
        const buscarPalabra = e.target.value.toLowerCase();

        const resultado = data.filter((usuario) =>
            Object.values(usuario).some((campo) =>
                typeof campo === 'string' && campo.toLowerCase().includes(buscarPalabra)
            )
        );
        dataFilter(resultado)
    };

    return (
        <Form>
            <FormControl
                type="text"
                placeholder="Buscar"
                className="mr-sm-2"
                onChange={inputHandler}
            />
        </Form>
    );
};

export default Buscador;
