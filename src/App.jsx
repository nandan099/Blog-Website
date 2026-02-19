import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Fotter/Footer";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import CategoryBlogs from "./Pages/CategoryBlogs/CategoryBlogs";
import DedicatedBlog from "./Pages/DedicatedBlog/DedicatedBlog";


function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}



function AuthLayout() {
  return <Outlet />;
}


function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:category" element={<CategoryBlogs />} />
          <Route path="/blog/:id" element={<DedicatedBlog />} />
        </Route>


        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
