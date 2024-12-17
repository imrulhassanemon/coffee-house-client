import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignIn from './Components/SignIn.jsx';
import Signup from './Components/Signup.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'signin',
    element:<SignIn></SignIn>
  },
  {
    path:'signup', 
    element:<Signup></Signup>
  },
  {
    path:'users',
    element:<Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Toaster></Toaster>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
