import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import TermsandConditions from "./components/TermsandConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsandConditions2 from "./components/TermsandConditions2";
import PrivacyPolicy2 from "./components/PrivacyPolicy2";
import ChildSafetyPolicy from "./components/ChildSafetyPolicy";
import ChildSafetyPolicy2 from "./components/ChildSafetyPolicy2";

// Add Terms and Conditions Component

function App() {
  return (
    <Router>
      
      {/* Define your Routes here */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <About />
            <Contact />
          </>
        } />
        
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions2" element={<TermsandConditions2 />} />
        <Route path="/privacypolicy2" element={<PrivacyPolicy2 />} />
        <Route path="/childsafetypolicy" element={<ChildSafetyPolicy/>} />
        <Route path="/childsafetypolicy2" element={<ChildSafetyPolicy2/>} />
      </Routes>

    </Router>
  );
}

export default App;
