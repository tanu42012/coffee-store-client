import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Component/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import CoffeeDetails from './Component/CoffeeDetails.jsx';
import SignIn from './Component/SignIn.jsx';
import SignUp from './Component/SignUp.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Users from './Component/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        loader:()=>fetch('http://localhost:3000/coffees'),
        Component: Home,

      },
      {
        path:'addCoffee',
        Component : AddCoffee,


      },
      {

        path:'coffee/:id',
        Component: CoffeeDetails,
      },

      {
        path:'updateCoffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        Component : UpdateCoffee,
      },
      {
        path: 'signin',
        Component:SignIn,

      },
      {
        path:'signup',
        Component: SignUp,
      },
      {
        path:'users',
        loader: ()=>fetch('http://localhost:3000/users'),
        
        Component: Users,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
