import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Navbar page={page} onNavigate={navigate} />
      {page === "home" && <Home onNavigate={navigate} />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
    </ThemeProvider>
  );
}
