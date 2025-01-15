import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import AboutMe from "/src/Pages/AboutMe";
import Portfolio from "/src/Pages/Portfolio";
import Contact from "/src/Pages/Contact";
import Resume from "/src/Pages/Resume";

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
