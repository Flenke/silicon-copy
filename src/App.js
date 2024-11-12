import React from "react";
import { Route, Routes } from "react-router-dom";
import "assets/css/main.scss";
import Header from "base/header/header";
import Footer from "base/footer/footer";
import Home from "home/home";
import Contact from "contact/contact";
export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
