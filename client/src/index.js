// Import React Resources
import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
//MUI Component Import
import { ThemeProvider, createTheme } from '@mui/material';
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
//Resource Import
import App from './App';
// WebVitals Import
import reportWebVitals from './reportWebVitals';

const theme = createTheme()

const httpLink = createHttpLink({
  uri: '/graphql',
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

