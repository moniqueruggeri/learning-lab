import "./BookSection.sass"
import Cards from "../Cards/Cards"
import Carousel from "../Carousel/Carousel"

import { useState, useEffect } from "react"
import Title from "../Title/Title"

const BookSection = ({ category }) => {
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        fetch("/data/books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data))
    }, [])

    useEffect(() => {
        if (books.length > 0) {
            const filtered = books.filter((book) => book.category === category)
            setFilteredBooks(filtered)
            setSelectedIndex(0)
        }
    }, [books, category])

    const categoryTitles = {
        bestsellers: "Mais Vendidos",
        releaseDate: "Últimos Lançamentos",
        relatedTo: "Relacionados",
    }

    return (
        <div>
            <Title text={categoryTitles[category] || "Livros"} />
    
            {filteredBooks.length > 0 && ( 
                <>
                    <Carousel/>
                    <Cards
                        bookTitle={filteredBooks[selectedIndex]?.title}
                        bookDesc={filteredBooks[selectedIndex]?.description}/>
                </>
            )}

        </div>
        )}
    )
}
