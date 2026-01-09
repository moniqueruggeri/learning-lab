import '../SearchBar/SearchBar.sass'

function SearchBar() {
    return (
        <div class="container-search-bar">
            <input type="text" class="search-bar" id="SearchBar" placeholder="Search..."/>
            <button class="search-button">Search</button>
        </div>
    )
}

export default SearchBar