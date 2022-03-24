// import logo from '../logo.svg'
import '../App.css'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

function App() {
    return (
        <div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Banner />
            <Cart />
            <ShoppingList />
        </div>
    )
}

export default App

//Ici on remplace le composant crée originalement par React par un composant plus simple et importé dans Banner.js//

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
