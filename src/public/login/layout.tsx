import React from "react";

import { version } from "../../config";

const Layout = ({ children }: { children: JSX.Element }) => (
  <div className="flex flex-col h-screen justify-between">
    <main className="mb-auto h-10 bg-green-500">{children}</main>
    <footer className="h-8 p-1">{version}</footer>
  </div>
);

export default Layout;
