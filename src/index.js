import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>,
    document.getElementById('root')
);