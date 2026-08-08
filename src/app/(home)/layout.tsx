"use client";
import Footer from "@/components/common/Footer";
import MobileNavbar from "@/components/common/MobileNavbar";
import Navbar from "@/components/common/Navbar";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" min-h-screen w-full flex justify-center">
    <div className="w-full max-w-390 3xl:w-360">
      <div className=" mx-auto pt-10  lg:p-0 ">
        <Navbar />
        <MobileNavbar/>
        {children}
        <Footer/>
      </div>
    </div>
  </main>
  );
}

export default Layout;
