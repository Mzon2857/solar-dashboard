import Home from "./pages/Home/Home.tsx";
import Users from "./pages/Users/Users.tsx";
import Placeholder from "./pages/placeholder/placeholder.tsx";
import Footer from "./components/footer/Footer.tsx";
import Menu from "./components/menu/Menu.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Login from "./pages/Login/login.tsx";
import Logs from "./pages/Logs/Logs.tsx";

import "./styles/global.scss"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
      
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/users",
          element: <Users/>
        },
        {
          path: "/placeholder",
          element: <Placeholder/>
        },
        {
          path: "/logs",
          element: <Logs/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
