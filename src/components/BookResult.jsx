import React, { useState } from "react";
import livros from '../data/Books';

function BookResult({ genero, onVoltar }) {
  const livrosFiltrados = livros.filter(livro => livro.genero === genero);
  const [livroSorteado, setLivroSorteado] = useState(null);
  const [loading, setLoading] = useState(false);

  function sortearLivro() {
    setLoading(true);
    setLivroSorteado(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * livrosFiltrados.length);
      setLivroSorteado(livrosFiltrados[randomIndex]);
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="book-result">
      <h2 className="titulo-sorteio">
        E sua próxima leitura do gênero <strong className="str-color">{genero}</strong> é...
      </h2>
      <button className="btn-sortear" onClick={sortearLivro}>🎲 Sortear Livro</button>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Sorteando seu livro...</p>
        </div>
      )}

      {!loading && livroSorteado && (
        <div className="resultado fade-in">
          <div className="livro-info">
            <img className="capa-livro" src={livroSorteado.imagem} alt={livroSorteado.titulo} />
            <div className="detalhes-livro">
              <h3>{livroSorteado.titulo}</h3>
              <p><strong>Autor:</strong> {livroSorteado.autor}</p>
              <button className="voltar-btn" onClick={onVoltar}>⬅ Voltar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookResult;
