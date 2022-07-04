import React, { useEffect} from 'react';
import styled from 'styled-components';
import { useObtenerConsejo } from '../contexts/ContextoConsejo';

const Consejo = () => {
    const nuevoConsejo = useObtenerConsejo();

    useEffect(()=>{
        nuevoConsejo.cambiarTodoElConsejo();
    },[]);

    return (
        <>
            <Titulo>ADVICE #{nuevoConsejo.idConsejo}</Titulo>
            <Contenido>"{nuevoConsejo.consejo}"</Contenido>
        </>
    );
}

//Styled
const Titulo = styled.p`
    color: hsl(150, 100%, 66%);
    letter-spacing: 4px;
    margin: 30px 0;
    font-size: 12px;
`;
const Contenido = styled.p`
    color: hsl(193, 38%, 86%);
    font-weight: 800;
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    width: 444px;

    @media (max-width: 430px){
        width: 295px;    
    }
`;


export default Consejo;