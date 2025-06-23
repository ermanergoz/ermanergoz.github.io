import { Routes, Route, HashRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const PrivacyPolicies = lazy(() => import("./pages/PrivacyPolicies"));

function App() {
  return (
    <div className="page">
      <HashRouter>
        <Header />
        <Suspense>
          <div className="page__content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="privacy-policies" element={<PrivacyPolicies />} />
            </Routes>
          </div>
        </Suspense>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
