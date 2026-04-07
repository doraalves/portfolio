import React, { useState, Suspense, lazy, useEffect } from "react";
import { notifyVisit, notifyLeave, trackPage } from "./utils/notifyVisit";
import { ThemeProvider } from "./context/ThemeContext";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

const About    = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact  = lazy(() => import("./pages/Contact"));

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    notifyVisit();
    window.addEventListener("beforeunload", notifyLeave);
    return () => window.removeEventListener("beforeunload", notifyLeave);
  }, []);

  const PAGE_NAMES = { home: "Home", about: "Sobre", projects: "Projetos", contact: "Contato" };
  useEffect(() => { trackPage(PAGE_NAMES[page]); }, [page]);

  const navigate = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <GlobalStyle />
      <CustomCursor />
      <Navbar page={page} onNavigate={navigate} />
      <Suspense fallback={null}>
        {page === "home" && <Home onNavigate={navigate} />}
        {page === "about" && <About />}
        {page === "projects" && <Projects />}
        {page === "contact" && <Contact />}
      </Suspense>
    </ThemeProvider>
  );
}
