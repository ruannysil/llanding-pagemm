import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const colors = {
  bgColor1: "#fff",
  bgColor2: "#ff0000ff"
}

const breakpoints = {
  sm: "30em", // 480px
  md: "49em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
}

const theme = extendTheme({
  colors,
  breakpoints,
  styles: {
    global: {
      a: {
        TextDecoder: 'none !import'
      },
      body: {
        height: '100vh',
        // background: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.995))`,
        color: '#fff',
      }
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
