import { ShopCategoryListContainer, CategoryTitle, CatProdCont } from "./shop-products-list-styles";
import React, { useState, useEffect} from "react";
import ProductCard from '../products-card/product-card-component';
import { selectCategoriesMap, selectIsLoading } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner-component";
import { CategoryRouteParams } from "../../routes/categories/categories-component";


const ShopCategoryList = ({category}: CategoryRouteParams) => {

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [products, categoriesMap, category])

        return(
            <ShopCategoryListContainer>
                <CategoryTitle>{category}</CategoryTitle>
                {isLoading ? <Spinner /> : <CatProdCont>
                    {products && products.map((item) =>{
                        return(
                            <ProductCard 
                            product={item}
                            key={item.id}
                            category={category}
                            />
                            )
                        })}
                </CatProdCont>}
            </ShopCategoryListContainer>
        )

}

export default ShopCategoryList;

