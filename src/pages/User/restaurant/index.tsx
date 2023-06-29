import FoodCategory from "@/components/restaurant/FoodCategory";
import Footer from "@/components/Footer";
import Menus from "@/components/restaurant/Menus";
import NavbarLocation from "@/components/Nav/NavbarLocation";
import RestaurantInfo from "@/components/restaurant/RestaurantInfo";
import "@/CSS/restaurant.scss";

const Restaurant = () => {

  
  return (
    <div className="restaurant">
      <NavbarLocation />
      <RestaurantInfo />
      <FoodCategory />
      <Menus />
      <Footer />
      {/* <ConfirmMenu/> */}
      {/* <Cart/> */}
    </div>
  );
};

export default Restaurant;
