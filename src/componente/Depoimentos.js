import React from 'react';

const Depoimento = (props) => {
    return(
        <div className="titulo">
            <img src={props.foto} />
            <h1>Digite o nome do gatinho:{props.nome}</h1>
        </div>
    );
};

export default Depoimento;