import Home from "./pages/Home";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="privacy-policies" element={<PrivacyPolicies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
