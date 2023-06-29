import { Link, useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const restaurantName = useParams().name;

  return (
    <div className="restaurant_Info-box w-full flex justify-center ">
      <div className="restaurant_Info w-[1280px] h-full px-4 pb-10 overflow-hidden">
        <div className="navigator pt-5 pb-2">
          <Link to="/" className="text-[#00a5cf]">
            หน้าหลัก
          </Link>
          <i className="fa-solid fa-chevron-right px-3"></i>
          <Link to="/restaurants" className="text-[#00a5cf]">
            <span>ร้านอาหาร</span>
          </Link>
          <i className="fa-solid fa-chevron-right px-3"></i>
          <span>{restaurantName}</span>
        </div>

        <h2 className="font-[500] text-4xl">{restaurantName}</h2>

        <p className="py-2">ไก่ทอด</p>

        <p className=" flex gap-10 ">
          <span>
            <i className="fa-solid fa-star pr-2 text-yellow-300"></i>
            4.4
          </span>
          <span>
            <i className="fa-regular fa-clock pr-2"></i>
            20 นาที • 2.7 km
          </span>
        </p>

        <p className=" flex gap-10 py-2 ">
          <strong>เวลาเปิดให้บริการ</strong>
          <span>
            <i className="fa-regular fa-clock pr-2"></i>
            วันนี้ 09:00 - 20.15
          </span>
        </p>

        <div className="text-[14px] font-[400]">
          <p>
            <i className="fa-solid fa-tag pr-2 text-[#00b14f]"></i>
            ส่วนลดรายการที่ร่วมโปรโมชัน
          </p>
          <p>
            <i className="fa-solid fa-tag pr-2 text-[#00b14f]"></i>
            ลด 30%
          </p>
        </div>

        <div className="selector flex gap-4 py-2">
          <select className="days-selector">
            <option value="today">วันนี้</option>
            <option value="Wed-21">พุธ-21</option>
            <option value="Thu-22">พฤหัสบดี-22</option>
            <option value="Fri-23">ศุกร์-23</option>
          </select>

          <select className="timer-selector">
            <option value="now">ตอนนี้</option>
            <option value="1hr">15.00-16.00</option>
            <option value="2hr">16.00-17.00</option>
            <option value="3hr">17.00-18.00</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
