import '../styles/shoppingList.css'

//Création d'un tableau (liste) déplacé dans le dossier datas
import {plantList} from '../datas/plantList'
// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

//On créé le composant concerné par cette liste en utilisant la méthode map pour itérer sur la liste à afficher
// function ShoppingList() {
//     return (
//         <ul>
//             {plantList.map((plant, index) => (//Pas besoin de backticks, les accolades suffisent
//                 /* <li>{plant}</li> */ //Il faut inclure une prop key à chaque li de liste
//                 <li key={`${plant}-${index}`}>{ plant }</li>//Comme pas d'id on trouve un moyen d'avoir une unique key 
//             ))}
//         </ul>
//     )
// }

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => {
                    console.log(cat)
					return <li key={cat +' n°'+ Math.random()}>{cat}</li>
                })}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
                        {plant.name}
                        {/* {plant.isBestSale ? <span>🔥</span> : <span>👎</span>} */}
                        {/* {plant.isBestSale ? <span>🔥</span> : null} */}
                        {/* {plant.isBestSale && <span>🔥</span>} idem que ci-dessus mais syntaxe plus courte avec && */}
                        {/* {plant.isBestSale && plant.category === "classique" && <span>🔥</span>} && utilisé pour chaîner les conditions */}
                        {/* {(plant.isBestSale || plant.category === "classique") && <span>🔥</span>}Utiliser les paranthèses car || et && */}
                        {(plant.isBestSale && plant.category === "classique") && <span>🔥</span>}
                        {plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span>}
                    </li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList