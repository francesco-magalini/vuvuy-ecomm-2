import React from "react";
import HeaderTop from "./headerTop";
import HeaderMiddle from "./headerMiddle";
import HeaderBottom from "./headerBottom";

export default function header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
}
