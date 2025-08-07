function BookCard({titulo, autor, genero, imagem}){
    return ( 
        <div className = "book-card">
            <img src={imagem} alt={titulo} className="book-image" />
            <h3>{titulo}</h3>
            <p><strong>Autor:</strong> {autor}</p>
            <p><strong>Gênero:</strong> {genero}</p>
        </div>
    )
}

export default BookCard;