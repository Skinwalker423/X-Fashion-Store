import styled from "styled-components";

export const ShopCategoryListContainer = styled.div` 
`
export const CatProdCont = styled.div` 
        display: grid;
        column-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 50px;

        @media screen and (max-width: 800px) {
        display: grid;
        column-gap: 15px;
        grid-template-columns: 1fr 1fr;
        row-gap: 30px;

    }
`

export const CategoryTitle = styled.h1` 
        text-align: center;
        font-size: 72px;
        font-weight: bolder;
        color: red;
        text-transform: uppercase;
        font-family: 'Times New Roman', Times, serif;

`