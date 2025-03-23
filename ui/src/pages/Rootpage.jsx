import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function RootPage() {
  return (
    <div className="mt-20">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
