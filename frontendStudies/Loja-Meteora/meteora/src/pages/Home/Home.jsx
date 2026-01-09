import Banners from '../../components/Banners/Banners'
import Categories from '../../components/Categories/Categories'
import Facilities from '../../components/Facilities/Facilities'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailMarketing from '../../components/MailMarketing/MailMarketing'
import MainProducts from '../../components/MainProducts/MainProducts'
import SearchBar from '../../components/SearchBar/SearchBar'
import '../Home/Home.sass'

function Home() {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Banners/>
            <Categories/>
            <MainProducts/>
            <Facilities/>
            <MailMarketing/>
            <Footer/>
        </div>
    )
}

export default Home