import { ReactNode } from "react";
import TopNavigation from "./TopNvigation";

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div className="min-h-screen">
      <TopNavigation />
      <main className="flex w-10/12 max-w-1xl m-12 text-black dark:text-white">{props.children}</main>
    </div>
  );
}

export default Layout;