import { useParams } from 'react-router-dom';
import ShopCategoryList from '../../components/shop-products-list/shop-products-list';

export type CategoryRouteParams = {
    category: string;
}


const Category = () => {

    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    console.log('render/rerender category component');

    return (
        <ShopCategoryList category={category}  />
    )
}

export default Category;
