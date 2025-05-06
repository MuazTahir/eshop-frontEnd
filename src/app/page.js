import Image from "next/image";
import Header from "./components/common/Header";
import HeroSection from "./components/common/hero-section";
import Posters from "./components/common/posters/poster";
import ApiFetch from "./components/apiData/apiFetch";
import AdminProductsShow from "./components/shoppingPanel/adminProductsshow";

export default function Home() {
  return (
    <div>
      <Header />
      <Posters />
      <HeroSection />
      <AdminProductsShow />
      <ApiFetch />
    </div>
  );
}
