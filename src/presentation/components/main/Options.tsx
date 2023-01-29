import React from 'react'

import { OptionsStyle } from './styled'

type TProps = {
    options: string[]
}
const Options: React.FC<TProps> = ({ options }: TProps) => {
    return (
        <>
            {options && options.map(option => <OptionsStyle key={option}>{option}</OptionsStyle>)}
        </>
    )
}

export default Options