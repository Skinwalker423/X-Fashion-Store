import React, {useContext} from "react";
import { ProductsContext } from "../../context/products-context";
import ProductCard from "../products-card/product-card-component";

import '../products-card/products-card-styles.scss';

const Hats = () => {

    const {products} = useContext(ProductsContext);

    const hatList = products.map((product) =>{
        return(
            <ProductCard 
                products={product}
                key={product.id}
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

