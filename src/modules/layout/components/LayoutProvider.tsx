import React, { ReactNode } from "react";

//Layout
import Header from "./header";
import Footer from "./footer";

interface LayoutProviderProps {
  children: ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
