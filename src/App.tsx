import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage/TermsPage";
import DhammaListPage from "./pages/DhammaListPage/DhammaListPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App: React.FC = () => {
  return (
   
      <BrowserRouter>
       <ScrollToTop>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dhamma/:id" element={<DhammaListPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="text-center mt-7">There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
   
  );
};

export default App;
