import React, { useContext, useState } from 'react';

const ContextoConsejo = React.createContext();
const useObtenerConsejo = () => useContext(ContextoConsejo);

const ConsejoProvider = ({children}) => {
    const [consejo, cambiarConsejo] = useState('');
    const [idConsejo, cambiarIdConsejo] = useState();
    const cambiarTodoElConsejo = () => {
        const id = parseInt(Math.random()*224);
        fetch(`https://api.adviceslip.com/advice/${id}`)
        .then((respuesta)=> respuesta.json())
        .then((value)=>{
            cambiarIdConsejo(value.slip.id);
            cambiarConsejo(value.slip.advice);
        })
        .catch((error) => console.log(error));
    };

    return (
        <ContextoConsejo.Provider value={{consejo, idConsejo, cambiarTodoElConsejo}}>
            {children}
        </ContextoConsejo.Provider>
        );
}
 
export {ConsejoProvider, useObtenerConsejo};