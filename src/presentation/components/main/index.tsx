import React from 'react'
import { Box } from '@mui/material'

import {
    BoxCardsStyle,
    BoxMainStyle,
    TitleStyled
} from './styled'
import { IProduct } from '../../../data/service'
import Payment from './Payment'
import CardProduct from './CardProduct'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { selectProduct, unselectProduct } from '../../../store/slice/productSlice'

type TProps = {
    products: IProduct[]
}
const MainPage: React.FC<TProps> = ({ products }: TProps) => {

    const selected = useAppSelector((state) => state.productsSelect)
    const dispatch = useAppDispatch()

    const eventProduct = (id: number) => {
        if (selected.selectProducts.includes(id)) {
            dispatch(unselectProduct(id))
        } else {
            dispatch(selectProduct(id))
        }
    }

    return (
        <BoxMainStyle>
            <TitleStyled variant={'h1'}>Ты сегодня покормил кота?</TitleStyled>
            <BoxCardsStyle>
                {products && products.map(product => (
                    <Box component={'div'} key={product.id}>
                        <CardProduct product={product} clickProduct={eventProduct} />
                        <Payment product={product} clickProduct={eventProduct} />
                    </Box>
                ))}
            </BoxCardsStyle>
        </BoxMainStyle>
    )
}

export default MainPage