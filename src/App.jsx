import "./App.css";
import HomePage from "./components/HomePage";
import SeoPage from "./components/SeoPage";
import Footer from "./components/Footer";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isSettingUp, setIsSettingUp] = useState(false);

  const handleStartClick = () => {
    setIsSettingUp(true);
  };

  return (
    <>
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
        <Route path="/SeoPage" element={<SeoPage />} />
      </Routes>
      {!isSettingUp && <Footer />}
    </>
  );
}

export default App;
