import { useState } from 'react'
import {plantList} from '../datas/plantList2'
import '../styles/shoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category), []
	)

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
                //Le point ipportant ici c'est que l'on copie le tableau car cela concerne la sélection courante et que la virgule semble vouloir dire qu'on y ajoute une nouvelle entrée (sans passer par .push)
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    //Le point important ici c'est comment on peut filtrer l'affichage des items avec une simple condition l.41, tu ne map que si y' a pas de catégorie ou si la catégorie choisie = la catégorie du tableau plantList. Moi j'aurais fait plsuieurs conditions, moins propres
	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList