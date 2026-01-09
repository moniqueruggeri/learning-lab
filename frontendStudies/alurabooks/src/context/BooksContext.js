import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("/data/booksData.json")
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .then((error) => console.error("Erro ao carregar livros:", error))
    }, [])
    
    return (
        <BooksContext.Provider value={{ books }}>
            {children}
        </BooksContext.Provider>
    )
}
