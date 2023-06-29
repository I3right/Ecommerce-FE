import { Link } from "react-router-dom";
import logoGrabfood from "@/assets/image/homepage/GrabFood.png";

const index = () => {
  return (
    <nav className="navbarLocation w-full flex justify-center ">
      <div className="w-[1280px] flex justify-between items-center p-4 overflow-hidden">
        <div className="flex gap-x-10 content-center">
          <div className="w-[150px] my-auto">
            <Link to="/">
              <img src={logoGrabfood} alt="Logo grab" className="w-full" />
            </Link>
          </div>
          
        </div>
        <div className="flex gap-4">
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
