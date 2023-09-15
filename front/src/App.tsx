import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { AddProductPage } from "./pages/AddProductPage";
import { LandingPage } from "./pages/LandingPage";
import { NavbarBottom } from "./components/NavbarBottom";
import { Header } from "./components/Header";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <NavbarBottom />
      </BrowserRouter>
    </>
  );
}

export default App;
