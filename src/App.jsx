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
import Dashboard from "./components/DashBoard/DashBoard";
import MyPages from "./components/MyPages";
function App() {
  const [isSettingUp, setIsSettingUp] = useState(false);

  const handleStartClick = () => {
    setIsSettingUp(true);
  };

  return (
    <div>
      <main className=" bg-white">
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
          <Route path="/my-pages/page" element={<PagesDashboard />} />
          <Route path="/thankyou-page" element={<ThankyouPage />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/sem-page" element={<SemPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-pages" element={<MyPages />} />
        </Routes>
      </main>

      {!isSettingUp && <Footer />}
    </div>
  );
}

export default App;
