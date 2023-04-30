
import Navigation from "./navigation";
import { useRef, useState, useLayoutEffect } from "react";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
