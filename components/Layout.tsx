import React from "react";

import Header from "./Header";

interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
