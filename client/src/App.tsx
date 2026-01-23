import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import RouteEffects from "@/components/RouteEffects";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import RequestContracts from "./pages/RequestContracts";
import ContractRequest from "./pages/ContractRequest";

// Lazy load heavy components for better performance
const EngineeringServices = lazy(() => import("./pages/EngineeringServices"));

function Router() {
  const [location] = useLocation();
  return (
    <>
      <AnimatePresence>
        <ScrollToTop />
        <Switch key={location} location={location}>
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/services"} component={Services} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/portfolio"} component={Portfolio} />
          <Route path={"/contracts"} component={RequestContracts} />
          <Route path={"/contract-request"} component={ContractRequest} />
          <Route path={"/:slug"}>
            {() => (
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                </div>
              }>
                <EngineeringServices />
              </Suspense>
            )}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [location] = useLocation();
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <SmoothScroll />
          <RouteEffects />
          <Toaster />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Router />
            </motion.div>
          </AnimatePresence>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
