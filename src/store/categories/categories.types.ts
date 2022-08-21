export enum CATEGORIES_ACTION_TYPES {
    SET_CATEGORIES = 'SET_CATEGORIES',
    FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUSCCESS',
    FETCH_CATEGORIES_FAIL = 'FETCH_CATEGORIES_FAIL',
}

export type CatetogyItem = {
    id: number;
    imageUrl: string;
    price: number;
    name: string;
}

export type Category = {
    title: string;
    imageUrl: string;
    items: CatetogyItem[]
}

export type CategoryMap = {
    [key: string] : CatetogyItem[]
}