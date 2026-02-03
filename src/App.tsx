import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SEOServices from "./pages/services/SEOServices";
import MetaGoogleAds from "./pages/services/MetaGoogleAds";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import Ecommerce from "./pages/services/Ecommerce";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/seo" element={<SEOServices />} />
          <Route path="/services/ads" element={<MetaGoogleAds />} />
          <Route path="/services/social-media" element={<SocialMediaMarketing />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
