import React from 'react';
import styled from 'styled-components';
import {ReactComponent as IconoDado} from '../images/icon-dice.svg';
import { useObtenerConsejo } from '../contexts/ContextoConsejo';

const BtnConsejo = () => {
    const nuevoConsejo = useObtenerConsejo();

    const cambiarNuevoConsejo = () => {
        nuevoConsejo.cambiarTodoElConsejo();
    };

    return (
        <ContenedorDado onClick={() => cambiarNuevoConsejo()}>
            <IconoDado/>
        </ContenedorDado>
    );
}

const ContenedorDado = styled.button`
  background: hsl(150, 100%, 66%);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: -30px;
  border: none;
  
  :hover {
    box-shadow: 0 0 30px hsl(150, 100%, 66%);
  }
`

export default BtnConsejo;