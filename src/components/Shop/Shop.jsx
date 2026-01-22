import { useState } from 'react';
import ProductsTable from './ProductsTable/ProductsTable'
import data from './data'

const Shop = () => {
    const [products, setProducts] = useState(data);
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <>
            <ProductsTable products={products} />
            <h2>Card</h2>
            <Cart cartProducts={cartProducts} />
        </>
    );
}

export default Shop;
