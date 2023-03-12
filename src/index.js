import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
//import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
const LazySignIn = React.lazy(() => import('./pages/sign-in/SignIn'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={ 
          <div className='grid place-content-center w-screen h-screen bg-black'>
            <div><Loader backgroundColor='transparent' color='white' /></div>
          </div>
          }>
            <LazySignIn />
          </React.Suspense>
        }></Route>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
