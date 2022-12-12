import React from 'react';
import ReactDOM from 'react-dom/client';

// ThemeProvider = como o nome já diz prover um tema 
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import { Routes } from './routes';

import theme from './styles/theme'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
