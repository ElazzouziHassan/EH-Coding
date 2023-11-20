import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Services from "./pages/services/Services";
import Works from "./pages/works/Works";
import Navbar from "./components/navbar/Navbar"

function App() {

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    { path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services/> },
        { path: '/works', element: <Works /> },
        { path: '/resume', element: <Resume /> },
        { path: '/contact', element: <Contact /> },
      ]
    },
  ]);

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
