import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

//pages
import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { AddProductPage } from "./pages/AddProductPage";
import { LandingPage } from "./pages/LandingPage";
import { NavbarBottom } from "./components/NavbarBottom";
import { Header } from "./components/Header";
import { SearchPage } from "./pages/SearchPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { UserPage } from "./pages/UserPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <NavbarBottom />
      </BrowserRouter>
    </>
  )
}
export default App;
