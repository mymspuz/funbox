import React, { useEffect, useState } from 'react'

import { Loader } from '../../../presentation/components'
import { getProductsRequests, IProduct } from '../../service'
import MainPage from '../../../presentation/components/main'

type TState = {
    isLoading: boolean
    products: IProduct[]
}

const MakeMain: React.FC = () => {
    const [state, setState] = useState<TState>({ isLoading: false, products: [] })

    useEffect(() => {
        setState({ ...state, isLoading: true })
        getProductsRequests()
            .then(data => {
                const timer = setTimeout(() => {
                    setState({ products: data, isLoading: false })
                }, 1500)
                return () => clearTimeout(timer)
            })
    }, [])

    return (
        state.isLoading
            ? <Loader />
            : <MainPage products={state.products}/>
    )
}

export default MakeMain