import React, {useContext} from "react";
import { ProductsContext } from "../../context/products-context";
import ProductCard from "../card/product-card-component";

import '../card/products-card-styles.scss';

const Hats = () => {

    const {products} = useContext(ProductsContext);

    const hatList = products.map(({name, imageUrl, price, id}) =>{
        return(
            <ProductCard 
                products={
                    {
                    name,
                    imageUrl,
                    price
                    }
                }
                key={id}
            />
        )
});

    return(
        <div className="products-container">
            {hatList}
        </div>
    )
}

export default Hats;

