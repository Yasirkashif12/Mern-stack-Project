import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"; // ✅ this is required

import Login from "./Loginroute";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import TransactionForm from "./TransactionForm";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout";
import TransactionSuccess from "./TransactionSuccess";
import ShowTransaction from "../ViewTransaction.jsx/ShowTransaction";
import { LogOut } from "lucide-react";
import Logout from "./Logout";
function App() {
const route = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  { 
    path:'/logout',
    element:<Logout/>
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/transactionform",
        element: <TransactionForm />,
      },
      {
        path:'transactionsuccess',
        element:<TransactionSuccess/>
      },
      {
        path:'/transactionsuccess/showtransaction',
        element:<ShowTransaction/>
      }
    ],
  },
]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
