import BookCard from "./BookCard";
import livros from "../data/Books";


function BookList(){
    return(
        <div className="book-list">
            {livros.map((livro) =>(
                <BookCard 
                key={livro.id}
                titulo={livro.titulo}
                autor={livro.autor}
                genero={livro.genero}
                imagem={livro.imagem}
                />

            ))}
        </div>
    );
}

export default BookList;