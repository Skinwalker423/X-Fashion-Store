export enum CATEGORIES_ACTION_TYPES {
    SET_CATEGORIES = 'SET_CATEGORIES',
    FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUSCCESS',
    FETCH_CATEGORIES_FAIL = 'FETCH_CATEGORIES_FAIL',
}

export type CategoryItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export type Category = {
    title: string;
    imageUrl: string;
    items: CategoryItem[]
}

export type CategoryMap = {
    [key: string]: CategoryItem[];
}


















// export type CategoryItem = {
//     id: number;
//     imageUrl: string;
//     price: number;
//     name: string;
// }

// export type Category = {
//     title: string;
//     imageUrl: string;
//     items: CategoryItem[]
// }

// export type CategoryMap = {
//     [key: string] : CategoryItem[]
// }