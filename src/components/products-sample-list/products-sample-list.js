import React, {useContext} from "react";
import { CategoriesContext } from "../../context/categories-context";
import ProductCard from "../products-card/product-card-component";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import '../products-card/products-card-styles.scss';

const ProductsSampleList = () => {

    const {categoriesMap} = useContext(CategoriesContext);

    const products = Object.keys(categoriesMap).map((title) => {
        return(

        <div className="categories-sample-container" key={title}>
            <Link to={title}><h2 className="product-title">{title}</h2></Link>
            <div className="products-container">
                {categoriesMap[title].map((item, index) =>{
                    if(index >= 4){
                        return null;
                    }
                    return(
                        <ProductCard 
                        products={item}
                        key={item.id}
                        id={item.id}
                        category={title}
                        />
                        )
                    })}
            </div>
        </div>
        )
    })

    return(
        <Fragment>
            {products}
        </Fragment>
    )
}

export default ProductsSampleList;

