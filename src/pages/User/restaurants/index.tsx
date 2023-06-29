import Crusine from "@/components/restaurants/Crusine"
import Footer from "@/components/Footer"
import NavbarLocation from "@/components/Nav/NavbarLocation"
import SearchBar from "@/components/restaurants/SearchBar"
import '@/CSS/restaurants.scss'

const Restaurants = () => {
  return (
    <>
    <NavbarLocation />
    <SearchBar/>
    <div className="w-full h-2 bg-[#f7f7f7]"></div>
    <Crusine/>
    <Footer/>
  </>
  )
}

export default Restaurants