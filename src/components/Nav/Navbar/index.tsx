import { Link } from "react-router-dom";
import logoGrabfood from "@/assets/image/homepage/GrabFood.png";

const index = () => {
  return (
    <nav className="navbar w-full flex justify-center ">
      <div className="w-[1280px] flex justify-between items-center p-4">
        <div className="w-[150px]">
          <Link to="/">
            <img src={logoGrabfood} alt="Logo grab" className="w-full" />
          </Link>
        </div>
        <div className="flex gap-4">
          <button>
            <Link
              to="/delivery"
              className="p-1 sm:p-2 lg:p-3 bg-white text-gray-500 hidden sm:block"
            >
              Delivery
            </Link>
          </button>
          <button>
            <Link
              to="/checkout"
              className="p-1 sm:p-2 lg:p-3 bg-white text-gray-500 hidden sm:block"
            >
              cart
            </Link>
          </button>
          <button className="p-1 sm:p-2 lg:p-3 bg-white text-gray-500">
            เข้าสู่ระบบ/ลงทะเบียน
          </button>
          <button className="p-1 sm:p-2 lg:p-3 bg-white text-gray-500">
            TH
          </button>
        </div>
      </div>
    </nav>
  );
};

export default index;
