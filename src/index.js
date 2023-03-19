import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
import Page404 from './pages/page404/Page404';
import { GlobalProvider } from './context/GlobalContext';
import Dashboard from './pages/dashboard/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

const LazySignIn = React.lazy(() => import('./pages/sign-in/SignIn'));
const LazyLayout = React.lazy(() => import(`./pages/layout/Layout`));

console.log(store);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <React.Suspense fallback={ 
              <div className='grid place-content-center w-screen h-screen' style={{ backgroundColor: '#0000ff' }}>
                <div><Loader backgroundColor='#0000ff' color='white' /></div>
              </div>
              }>
                <LazySignIn />
              </React.Suspense>
            }></Route>

            <Route path='/home' element={
              <React.Suspense fallback={
                <div className='grid place-content-center w-screen h-screen' style={{ backgroundColor: '#0000ff' }}>
                <div><Loader backgroundColor='#0000ff' color='white' /></div>
                </div>
              }>
                <LazyLayout />
              </React.Suspense>
            }>
            <Route index element={ <Dashboard />
            }></Route>

            </Route>

            <Route path='*' element={ <Page404 /> } />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </Provider>
  </React.StrictMode>
);
