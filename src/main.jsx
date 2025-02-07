import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/normalize.css";
import "./styles/index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import AboutMe from "./pages/AboutMe";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Grab-Read/">
    <StrictMode>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
