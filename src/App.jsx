// import './App.css';
// import HomePage from "./components/HomePage";
// import SeoPage from "./components/SeoPage";
// import Footer from "./components/Footer";
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import SignUpPage from "./components/SignUpPage";
// import PagesDashboard from "./components/PagesDashboard";
// import ThankyouPage from "./components/ThankyouPage";
// import TermsAndConditions from "./components/TermsAndConditions";
// import SemPage from "./components/SemPage";
// import Dashboard from "./components/DashBoard/page";

// function App() {
//   const [isSettingUp, setIsSettingUp] = useState(false);

//   const handleStartClick = () => {
//     setIsSettingUp(true);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <HomePage
//                 isSettingUp={isSettingUp}
//                 onStartClick={handleStartClick}
//               />
//             }
//           />
//           <Route path="/seo-page" element={<SeoPage />} />
//           <Route path="/login-page" element={<LoginPage />} />
//           <Route path="/signup-page" element={<SignUpPage />} />
//           <Route path="/dashboard-page" element={<PagesDashboard />} />
//           <Route path="/thankyou-page" element={<ThankyouPage />} />
//           <Route path="/terms-conditions" element={<TermsAndConditions />} />
//           <Route path="/sem-page" element={<SemPage />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//         </Routes>
//       </main>

//       {!isSettingUp && <Footer />}
//     </div>
//   );
// }

// export default App;


import './App.css';
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
// import Dashboard from "./components/DashBoard/page";

import Dashboard from "./components/dashboard";

function App() {
  const [isSettingUp, setIsSettingUp] = useState(false);

  const handleStartClick = () => {
    setIsSettingUp(true);
  };

  // Layout component to control footer visibility
  const Layout = ({ children, showFooter = true }) => (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      {!isSettingUp && showFooter && <Footer />}
    </div>
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage
              isSettingUp={isSettingUp}
              onStartClick={handleStartClick}
            />
          </Layout>
        }
      />
      <Route path="/seo-page" element={<Layout><SeoPage /></Layout>} />
      <Route path="/login-page" element={<Layout><LoginPage /></Layout>} />
      <Route path="/signup-page" element={<Layout><SignUpPage /></Layout>} />
      <Route path="/dashboard-page" element={<Layout><PagesDashboard /></Layout>} />
      <Route path="/thankyou-page" element={<Layout><ThankyouPage /></Layout>} />
      <Route path="/terms-conditions" element={<Layout><TermsAndConditions /></Layout>} />
      <Route path="/sem-page" element={<Layout><SemPage /></Layout>} />
      <Route path="/Dashboard" element={<Layout showFooter={false}><Dashboard /></Layout>} />
    </Routes>
  );
}

export default App;