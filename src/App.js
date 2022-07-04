import React from 'react';
import styled from 'styled-components';
import Consejo from './elements/Consejo';
import {ReactComponent as IconoDesktop} from './images/pattern-divider-desktop.svg';
import {ReactComponent as IconoMobile} from './images/pattern-divider-mobile.svg';
import BtnConsejo from './elements/BtnConsejo';

const App = () => {
  return (
    <Contenedor>
      <Consejo/>
      <ContenedorIconoDesktop>
        <IconoDesktop/>
      </ContenedorIconoDesktop>
      <ContenedorIconoMobile>
        <IconoMobile/>
      </ContenedorIconoMobile>
      <BtnConsejo/>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  background: hsl(217, 19%, 24%);
  display: flex;
  margin: auto;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 15px;
  width: 550px;
  position: relative;

  @media (max-width: 430px){
    width: 330px;    
  }
`;

const ContenedorIconoDesktop = styled.div`
  margin-bottom: 50px;
  @media (max-width: 430px){
    display: none;
  }
`;

const ContenedorIconoMobile = styled.div`
  margin-bottom: 50px;
  display: none; 
  @media (max-width: 430px){
    display: block;
  }
`;

export default App;