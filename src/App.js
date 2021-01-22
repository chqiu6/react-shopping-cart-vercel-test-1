import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext"; 

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartItem from "./components/ShoppingCartItem";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	const removeItem = item => {
		setCart(cart.filter((product) => {
			return product.id !== item
		}))
		console.log("Did we remove the selected item 🤔?", cart);
	};

	return (
		<div className="App">
			<ProductContext.Provider value = {{products, addItem}}>
			<CartContext.Provider value = {{cart, removeItem}}>
			{/* <Navigation cart={cart} /> */}
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				{/* <Products products={products} addItem={addItem} /> */}
				<Products/>
			</Route>

			<Route path="/cart">
				{/* <ShoppingCart cart={cart} /> */}
				<ShoppingCart />
			</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
