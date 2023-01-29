import React, { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'

import GlobalStyles from './globalStyles'
import typography from './typography'

interface IThemeProviderProps {
    children: any
}

const ThemeProvider: React.FC<IThemeProviderProps> = (props: IThemeProviderProps) => {

    const themeOptions: any = useMemo(
        () => ({
            typography,
        }), []
    )

    const theme = createTheme(themeOptions)

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                {props.children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeProvider