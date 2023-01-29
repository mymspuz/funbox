import React from 'react'
import { WeightBoxStyle, WeightUnitStyle, WeightValueStyle } from './styled'

type TProps = {
    value: number
    unit: string
    color: string
}
const StickerWeight: React.FC<TProps> = ({ value, unit, color }: TProps) => {
    return (
        <WeightBoxStyle color={color}>
            <WeightValueStyle>{String(value).replace('.', ',')}</WeightValueStyle>
            <WeightUnitStyle>{unit}</WeightUnitStyle>
        </WeightBoxStyle>
    )
}

export default StickerWeight