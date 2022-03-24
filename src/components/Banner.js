import '../styles/banner.css'
import logo from '../assets/logo.png'
import Recommandation from './Recommandation'

function Banner() {
    const title = 'La maison jungle'
    // const currentMonth = new Date().getMonth()
    // const isSpring = currentMonth >= 2 && currentMonth <= 5
    // //On déclare une variable dans laquelle on va mettre la condition booléenne ternaire
    // const recommandation = isSpring ? (<div>C'est le printemps, rempotez</div>) : (<div>Ce n'est pas le moment de rempoter</div>)


    return (
        <div className='lmj-banner'>
            <div className='lmj-banner-row'>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            </div>
            {/* {isSpring ? (
                <div>C'est le printemps, rempotez</div>
            ) : (
                <div>Ce n'est pas le moment de rempoter</div>
            )} */}
            {/* {recommandation}On insère la variable déclarée, permettant de sortir les conditions pour plus de lisibilité */}
            <Recommandation />
        </div>
    )
}

export default Banner