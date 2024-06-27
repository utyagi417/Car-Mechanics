import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Mantine Style 

import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

// CSS
import './styles/App.css';
import  './styles/index.css';


import './styles/button.css';
import './styles/navbar.css';

// HERO PAGE CSS
import './styles/hero.css';
import './styles/preloader.css';
import './styles/service-section.css';
import './styles/funfacts.css';
import './styles/marquee.css';
import './styles/packages.css';
import './styles/testimonial.css';
import './styles/contactForm.css';


import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext.jsx';
import {Provider} from 'react-redux'
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthContextProvider >
          <Provider store={store}>
            <MantineProvider>
              <App />
            </MantineProvider>
          </Provider>
        </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
