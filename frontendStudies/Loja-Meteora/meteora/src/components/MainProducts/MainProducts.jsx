import '../MainProducts/MainProducts.sass'
import products from '../../utils/products.json'
import camisetaconforto from '../../assets/img/card-camiseta.png'
import calcaalfaiataria from '../../assets/img/card-calca.png'
import bolsacoringa from "../../assets/img/card-bolsa.png"
import oculosredondo from "../../assets/img/card-oculos.png"
import jaquetajeans from "../../assets/img/card-jaqueta.png"
import tenischuncky from "../../assets/img/card-tenis.png"

const images = {
    "card-camiseta.png": camisetaconforto,
    "card-calca.png": calcaalfaiataria,
    "card-bolsa.png": bolsacoringa,
    "card-oculos.png": oculosredondo,
    "card-jaqueta.png": jaquetajeans,
    "card-tenis.png": tenischuncky
}

function MainProducts() {

    return (
        <section class="products">
        <h3 className="section-title">Produtos que estão bombando!</h3>
        <ul className="products-list">
            { products.map((product) => 
            <li className="product-card">
                <img src={images[product.img]} alt={product.alt}/>
                
                <div className="product-texts">
                    <h3 className="product-card-title">{product.nome}</h3>
                    <p className="product-card-description">{product.description}</p>
    
                    <h3 className="product-card-price">{product.price}</h3>
                    <button className="button button-see-more">Veja mais</button>
                </div>
            </li>
            )}
        </ul>
    </section>
    )
}

export default MainProducts