import React from "react";
import Books from '../data/Books'

function GeneroSeletor({generosDisponiveis, generoEscolhido, onGeneroSelecionado}){
    return(
        <div className="seletor-genero">
            <h2>Escolha um gênero:</h2>
            <div className="card-container">
                {generosDisponiveis.map((gen, index)=> (
                    <div
                    key={index}
                    className={`card ${generoEscolhido === gen ? "selected" : ""}`}
                    onClick={() => onGeneroSelecionado(gen)}
                    >
                        <h3>{gen}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GeneroSeletor;


/*import React from "react";
import Books from '../data/Books'

function SeletorGenero({generoSelecionado, onChange}){
    const generos = ['Romance', 'Fantasia', 'Distopia', 'Reflexivo'];

    return(
        <div className='seletor'>
            <label>Escolha seu Gênero:</label>
            <div className='generos-container'>
                {generos.map((genero)=> (
                    <div 
                    key={genero}
                    className={`genero-card ${generoSelecionado === genero ?  'selecionado' : ''}`}
                    onClick={() => onChange({target: {value: genero}})}
                    >
                        {genero}
                    </div>
                
                )
                )}
            </div>
        </div>
    );
}

export default SeletorGenero;*/