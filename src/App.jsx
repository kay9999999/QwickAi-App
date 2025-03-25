import "./App.css";
import HomePage from "./components/HomePage";
import SeoPage from "./components/SeoPage";
import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import PagesDashboard from "./components/PagesDashboard";
import ThankyouPage from "./components/ThankyouPage";
import TermsAndConditions from "./components/TermsAndConditions";
import SemPage from "./components/SemPage";

function App() {
  const [isSettingUp, setIsSettingUp] = useState(false);

  const handleStartClick = () => {
    setIsSettingUp(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isSettingUp={isSettingUp}
                onStartClick={handleStartClick}
              />
            }
          />
          <Route path="/seo-page" element={<SeoPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/signup-page" element={<SignUpPage />} />
          <Route path="/dashboard-page" element={<PagesDashboard />} />
          <Route path="/thankyou-page" element={<ThankyouPage />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/sem-page" element={<SemPage />} />
        </Routes>
      </main>

      {!isSettingUp && <Footer />}
    </div>
  );
}

export default App;
