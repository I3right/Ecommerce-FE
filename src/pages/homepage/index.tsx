import Ads from "../../components/homepage/Ads/index";
import Category from "@/components/homepage/Category";
import FAQ from "@/components/homepage/FAQ";
import Footer from "@/components/Footer";
import Banner from "@/components/homepage/Banner";
import Navbar from "@/components/Nav/Navbar";
import Promotion from "@/components/homepage/Promotion";
import "@/CSS/homepage.scss";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <hr className="mt-[80px] mb-[64px]"/>
      <Promotion/>
      <Category/>
      <FAQ/>
      <Ads/>
      <Footer/>
    </>
  );
};

export default Homepage;
