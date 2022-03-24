// import logo from '../logo.svg'
import {useState, useEffect} from 'react' //Pour commencer à naviguer entre les composants avec le state dans les fonctions composants, il faut déjà commencer par importer useState dans les fichiers qui en ont besoin.
import '../styles/layout.css'
import logo from '../assets/logo.png'
import Banner from './Banner2'
import Cart from './Cart2'
import ShoppingList from './ShoppingList2'
import Recommandation from './Recommandation2'
import Footer from './Footer'

function App() {
    // const [cart, updateCart] = useState([]) //Ensuite on déclare le useState dans le composant fonction et on déclare les attributs dans le composant enfont en lui attribunat les valeurs de useState que l'ont récupérera via les props classiques chez l'enfant (destructuration des props avec les noms des attributs directement mais dans un {objet} : ex. {children} au lieu de props + props.children)

    //Dernières update pour enregistrer le panier dans le localStorage via useEffect
    const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

    return (
        <div>
            <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
                <Recommandation />
			</Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App
