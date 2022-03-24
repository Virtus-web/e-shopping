import { useState, useEffect } from 'react'
import '../styles/cart.css'

function Cart({cart, updateCart}) {
    //Plusieurs solutions mais la plus simple est de déclarer les variables d'état à la suite
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)//Ici on calcule le prix du panier

    // alert(`J'aurai ${total}€ à payer 💸`)
    // useEffect(() => {
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // })

    // useEffect(() => {
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // }, [total])

    useEffect(() => {//Change le nom de l'onglet
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

    //On enlève ces prix car il y a maintenant un prix par plante dans les data
    // const monsteraPrice = 8
    // const ivyPrice = 10
    // const flowerPrice = 15

    //Important ici, On fait passer le paramètre correspondant à la modification du useful statement via la technique de gestion des événements ( sans rien ou via un paramètre et une fonction intermédiaire anonyme, ou encore un bind) 

    //Donc ici on récupère la variable d'état déclarée dans App et récupérée ici via props destructurés, correspondant à un tableau vide à la base et récupérant les plantes ajoutées dans le panier cart, ensuite on le map quand on veut détailler le panier et le prix de chaque plante, et on utilise reduce plus haut pour n'avoir que les catégories achetées
    return isOpen ? (
        <div className='lmj-cart'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
				<div>Votre panier est vide</div>
			)}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    )
}

export default Cart