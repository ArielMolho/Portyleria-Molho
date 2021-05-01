import React from 'react';
import './App.css';
import AppRouter from './containers/AppRouter/AppRouter';
import AppContextProvider from './context/cartContext';

export default function App () {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  )
}