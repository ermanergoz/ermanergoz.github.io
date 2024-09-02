import Home from "./pages/Home";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteMap from "./pages/SiteMap"

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="privacy-policies" element={<PrivacyPolicies />} />
          <Route path="site-map" element={<SiteMap />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
