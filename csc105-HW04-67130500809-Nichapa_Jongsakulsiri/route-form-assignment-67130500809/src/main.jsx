import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import Login from './pages/LoginPage.jsx';
import Homepage from './pages/HomePage.jsx';
import SignUp from './pages/SignUp.jsx';
import NotFound from './pages/NotFound.jsx';
import FavDetail from './pages/FavouriteDetailPage.jsx';
import FavPage from './pages/FavouritesPage.jsx';

const router = createBrowserRouter([
  {path:"/", element: <App/>, children:[
    {index: true, element: <Homepage/>},
    {path: "/fav", element: <FavPage/>},
    {path: "/fav/:id", element: <FavDetail/>},


  ]},
  {path: "/signup", element: <SignUp/>},
  {path: "/login", element: <Login/>},
  {path: "*", element: <NotFound/>},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
