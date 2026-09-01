import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import PageLoader from "./components/PageLoader";

/* ─── Lazy-loaded pages (code split per route) ─── */
const Home     = lazy(() => import("./pages/Home"));
const About    = lazy(() => import("./pages/About"));
const Work     = lazy(() => import("./pages/Work"));
const Contact  = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <>
      {/* Full-screen branded loader shown on first load & lazy chunk fetch */}
      <PageLoader />

      <Navbar />
      <ScrollToTop />

      <Suspense fallback={null}>
        <div>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work"     element={<Work />} />
            {/* Catch-all — must be last */}
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
