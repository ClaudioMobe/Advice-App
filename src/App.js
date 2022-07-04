import React from 'react';
import styled from 'styled-components';
import Consejo from './elements/Consejo';
import {ReactComponent as IconoDesktop} from './images/pattern-divider-desktop.svg';
import BtnConsejo from './elements/BtnConsejo';

const App = () => {
  return (
    <Contenedor>
      <Consejo/>
      <ContenedorIcono>
        <IconoDesktop/>
      </ContenedorIcono>
      <BtnConsejo/>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  background: hsl(217, 19%, 24%);
  display: flex;
  margin: auto;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  max-width: 600px;
  position: relative;
`;

const ContenedorIcono = styled.div`
  margin-bottom: 50px;
`

export default App;