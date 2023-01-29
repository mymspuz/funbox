import React, { useEffect, useState } from 'react'

import { IProduct } from '../../../data/service'
import {
    BoxBorderContentStyle, BoxCatStyle,
    BoxColorContentStyle,
    BoxContentStyle,
    DescriptionStyle,
    NameStyle, palette,
    TasteStyle
} from './styled'
import Options from './Options'
import StickerWeight from './StickerWeight'
import { useAppSelector } from '../../../hooks'

type TProps = {
    product: IProduct
    clickProduct: (id: number) => void
}

const CardProduct: React.FC<TProps> = ({ product, clickProduct }: TProps) => {

    const selected = useAppSelector((state) => state.productsSelect)
    const isSelected: boolean = selected.selectProducts.includes(product.id)
    const isDisabled: boolean = !product.balance

    const [color, setColor] = useState<string>(
        isSelected
            ? palette.selected.default
            : isDisabled
                ? palette.disabled.default
                : palette.main.default
    )

    const handlerEnter = () => {
        if (!isDisabled) {
            setColor(isSelected ? palette.selected.hover : palette.main.hover)
        }
    }

    const handlerLeave = () => {
        if (!isDisabled) {
            setColor(isSelected ? palette.selected.default : palette.main.default)
        }
    }

    useEffect(() => {
        handlerLeave()
    }, [isSelected])

    return (
        <BoxBorderContentStyle
            color={color}
            onMouseEnter={handlerEnter}
            onMouseLeave={handlerLeave}
            sx={{ cursor: isDisabled ? 'default' : 'pointer' }}
        >
            <BoxColorContentStyle
                onClick={() => clickProduct(product.id)}
            >
                <BoxContentStyle>
                    <DescriptionStyle>{product.descHeader}</DescriptionStyle>
                    <NameStyle>{product.name}</NameStyle>
                    <TasteStyle>{product.taste}</TasteStyle>
                    <Options options={product.options} />
                </BoxContentStyle>
                <BoxCatStyle zIndex={isDisabled ? 10 : -1}>
                    <StickerWeight value={product.weight.value} unit={product.weight.unit} color={color}  />
                </BoxCatStyle>
            </BoxColorContentStyle>
        </BoxBorderContentStyle>
    )
}

export default CardProduct