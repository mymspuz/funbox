import React from 'react'

import { BoxPaymentStyle, PaymentLinkStyle, PaymentStyle } from './styled'
import { useAppSelector } from '../../../hooks'
import { IProduct } from '../../../data/service'

type TProps = {
    product: IProduct
    clickProduct: (id: number) => void
}

const Payment: React.FC<TProps> = ({ product, clickProduct }: TProps) => {
    const selected = useAppSelector((state) => state.productsSelect)
    const isSelected: boolean = selected.selectProducts.includes(product.id)
    const isDisabled: boolean = !product.balance

    const Description = () => {
        return (
            isDisabled
                ? <PaymentStyle sx={{ color: '#FFFF66' }}>Печалька, {product.taste} закончился.</PaymentStyle>
                : isSelected
                    ? <PaymentStyle>{product.descFooter}</PaymentStyle>
                    :
                    <PaymentStyle>
                        Чего сидишь? Порадуй котэ,
                        <PaymentLinkStyle
                            onClick={() => clickProduct(product.id)}
                        >
                            купи.
                        </PaymentLinkStyle>
                    </PaymentStyle>
        )
    }

    return (
        <BoxPaymentStyle>
            <Description />
        </BoxPaymentStyle>
    )
}

export default Payment