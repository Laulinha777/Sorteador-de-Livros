import { useState } from 'react';
import './App.css'; 
import GeneroSeletor from './components/SeletorGenero';
import { Book } from 'lucide-react';
import BookResult from './components/BookResult';

function App() {
  const generosDisponiveis = ["Romance", "Fantasia", "Distopia", "Suspense", "Reflexivo"];
  const [generoEscolhido, setGeneroEscolhido] = useState(null);

  return (
    <div className="home">
      {!generoEscolhido ? (
        <div className='fade-in'>
          <div className="header-container">
            <div className='title-container'>
              <h1>☕︎Biblioteca Virtual</h1>
              <div className='subtitle'>
                <p>
                  Está com dúvidas em relação à sua próxima leitura? Escolha um gênero e deixe que o destino decida sua próxima aventura!
                </p>
              </div>
            </div>
          </div>
          {/* Passando os gêneros para o Seletor */}
          <GeneroSeletor 
            generosDisponiveis={generosDisponiveis} 
            onGeneroSelecionado={setGeneroEscolhido} 
          />    
          <p className='genero-selecionado'>Gênero Atual: {generoEscolhido || "Nenhum gênero selecionado"}</p>
        </div>
      ) : (
        <div className='fade-in'>
          <BookResult genero={generoEscolhido} 
          onVoltar={() => setGeneroEscolhido(null)}/>
        </div>  
      )}
    </div>
  );
}

export default App;
