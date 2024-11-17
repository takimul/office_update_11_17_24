"use client";
import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import useLoadData from "@/Hooks/useLoadData";

const MainLayout = ({ children }) => {
  const [, , nav = isLoading] = useLoadData("navbar");
  const [, , banner = isLoading] = useLoadData("banner");
  const [, , portfolio = isLoading] = useLoadData("portfolio");

  return (
    <div className={"scroll-smooth"}>
      {nav || banner || portfolio ? (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">
          <span className="loading loading-infinity w-36"></span>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <div className="">{children}</div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
