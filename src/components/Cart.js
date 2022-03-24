import '../styles/cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li key='555'>Monstera : {monsteraPrice}€</li>
                <li key='777'>Lierre : {ivyPrice}€</li>
                <li key='999'>Fleurs : {flowerPrice}€</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + flowerPrice }€
        </div>
    )
}

export default Cart