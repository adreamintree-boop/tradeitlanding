import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import ExportAgency from "./pages/ExportAgency.tsx";
import Blog from "./pages/Blog.tsx";
import BuyersPage from "./pages/seo/BuyersPage.tsx";
import SeoAdmin from "./pages/admin/SeoAdmin.tsx";
import SeoEditor from "./pages/admin/SeoEditor.tsx";
import { RequestModalProvider } from "./components/landing/RequestModalContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RequestModalProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/export-agency" element={<ExportAgency />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/kr/buyers/:product" element={<BuyersPage />} />
              <Route path="/kr/buyers/:product/:country" element={<BuyersPage />} />
              <Route path="/admin/seo" element={<SeoAdmin />} />
              <Route path="/admin/seo/new" element={<SeoEditor />} />
              <Route path="/admin/seo/:id" element={<SeoEditor />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </RequestModalProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
