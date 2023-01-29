import * as React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

export default function Loader() {
    return (
        <Backdrop
            sx={{ color: '#FFF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}