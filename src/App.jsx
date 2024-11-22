import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import TermsandConditions from "./components/TermsandConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

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
        
        {/* Add route for /termsandconditions */}
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
