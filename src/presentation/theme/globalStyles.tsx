import { GlobalStyles as MUIGlobalStyles } from '@mui/material'
import React from 'react'

const GlobalStyles: React.FC = () => {
    return (<MUIGlobalStyles styles={{
        '*': {
            boxSizing: 'border-box',
        },
        html: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            WebkitOverflowScrolling: 'touch',
        },
        body: {
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
        },
        '#root': {
            width: '100%',
            height: '100%',
        },
        img: {
            display: 'block',
            maxWidth: '100%',
        },
        ul: {
            margin: 0,
            padding: 0,
        },
    }} />)
}

export default GlobalStyles