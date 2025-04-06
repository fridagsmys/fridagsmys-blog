import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import About from "./pages/About";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <Router>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
