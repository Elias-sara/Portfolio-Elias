import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Footer = lazy(() => import("./components/Footer"));

// Fallback component for loading state
const Loading = () => <div>Loading...</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="relative z-0 bg-dim-background">
          <div className="bg-hero-pattern bg-cover bg-repeat bg-center mt-[navbar-height]">
            <Navbar className="navbar" />
          </div>
          <div className="bg-hero-pattern bg-cover bg-repeat bg-center mt-[navbar-height]">
            <Hero className="navbar" />
          </div>
          <main>
            {/* About Section */}
            <section id="about">
              <About />
            </section>

            {/* Main Content Sections */}

            <section id="experience">
              <Experience />
            </section>
            <section id="tech">
              <Tech />
            </section>

            <section id="feedbacks">
              <div className="relative z-0">
                <Works />
                <Feedbacks />
                <StarsCanvas />
              </div>
            </section>
          </main>

          {/* Footer Section */}
          <footer className="bg-hero-pattern bg-cover bg-repeat bg-center mt-[navbar-height]">
            {/* <footer className="bg-cover bg-no-repeat bg-center"> */}
            <Footer />
          </footer>
          {/* <Navbar className="navbar" /> */}
          {/* <Hero className="navbar" /> */}
          {/* </div> */}
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
