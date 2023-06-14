import { FC, ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 antialiased">
        <Navbar/>
        <Sidebar/>
        <main className="bg-gray-100 dark:bg-gray-900 p-4 lg:ml-16 mt-16">
          {children}
        </main>
      </div>
    </>
  );
};
