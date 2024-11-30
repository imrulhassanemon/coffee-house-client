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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'updateCoffee',
    element: <UpdateCoffee></UpdateCoffee>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster></Toaster>
    <RouterProvider router={router} />
  </StrictMode>,
)
