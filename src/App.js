import './App.css';
import SignIn from './pages/sign-in/SignIn';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from './components/loader/Loader';

// Defining the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />
  },
  {
    path: '/home',
    async lazy() {
      const layout = await import('./pages/layout/Layout');
      return { Component: layout }
    }
  }
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={ <Loader /> } >
    </RouterProvider>
  );
}

export default App;
