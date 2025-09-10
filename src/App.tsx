// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BrandPage from "./pages/BrandPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Brand detail */}
        <Route path="/brand/:slug" element={<BrandPage />} />

        {/* Fallback: send everything else to home (SPA routing) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
