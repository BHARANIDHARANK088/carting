import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 56
import { AuthContextProvider } from './context/authContext/AuthContext';

// 76
import { MovieContextProvider } from './context/movieContext/MovieContext';

// 103
import { ListContextProvider } from './context/listContext/ListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 57 */}
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
           <App/>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
