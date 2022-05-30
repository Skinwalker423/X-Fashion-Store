import './shop-products-list-styles.scss';
import React, {useContext, useState, useEffect} from "react";
import { CategoriesContext } from '../../context/categories-context';
import ProductCard from '../products-card/product-card-component';


import '../products-card/products-card-styles.scss';

const ShopCategoryList = ({category}) => {

    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [products, categoriesMap])

        return(
            <div className='shop-category-list-container'>
            <h1 className='product-title'>{category}</h1>
            <div className="products-container">
                {products && products.map((item) =>{
                    return(
                        <ProductCard 
                        products={item}
                        key={item.id}
                        />
                        )
                    })}
            </div>
            </div>
        )

}

export default ShopCategoryList;

