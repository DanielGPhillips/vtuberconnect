// Import React Resources
import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
//MUI Component Import
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
//Apollo Import
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// Firebase Import
import { Storage } from './firebase/index'
//Resource Import
import App from './App';
// WebVitals Import
import reportWebVitals from './reportWebVitals';

const theme = createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6800',
    },
    secondary: {
      main: '#FFB27E',
    },
    error: {
      main: '#f44336',
    },
  },
});

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <StyledEngineProvider injectFirst>     
          <ThemeProvider theme={theme}>
          <CssBaseline /> 
            <App />
          </ThemeProvider>                
        </StyledEngineProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

