import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import About from "./pages/About";
import GamePage from "./pages/GamePage";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
        <Footer />
    </Router>
  );
};

export default App;
