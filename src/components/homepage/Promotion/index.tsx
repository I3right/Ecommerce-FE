import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {mockupDataRestaurant} from '@/Data/mockup/homepage'

const Promotion = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(mockupDataRestaurant)

  const text =
    "Sanam Bin Rd, Suthep, Mueang Chiang Mai, Chiang Mai, 50200, Thailand";


  const handleSearch = () => {
    navigate("/restaurants");
  };

  const scorllLeft = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Adjust the value as per your requirement
        behavior: "smooth",
      });
    }
  };

  const scorllRigtht = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Adjust the value as per your requirement
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="promotion-box w-auto h-[480px] flex justify-center ">
      <div className="promotion w-auto max-w-[1280px] h-full px-4">
        <div className="promotion-title font-[500] text-4xl overflow-hidden">
          <h2 className="promotion-title-header">
            โปรโมชัน GrabFood ใน <span className="text-green-600">{text}</span>
          </h2>
        </div>
        <div className="promotion-card-box relative">
          <i
            className="fa-solid fa-chevron-left cardLeft"
            onClick={scorllLeft}
          ></i>
          <div
            className="promotion-card h-[350px] flex gap-x-4 overflow-hidden flex-nowrap"
            ref={containerRef}
          >
            <div className="card min-w-[48%] md:min-w-[24%] bg-slate-400 h-full">
              1
            </div>
            <div className="card min-w-[48%] md:min-w-[24%] bg-slate-400 h-full">
              2
            </div>
            <div className="card min-w-[48%] md:min-w-[24%] bg-slate-400 h-full">
              3
            </div>
            <div className="card min-w-[48%] md:min-w-[24%] bg-slate-400 h-full">
              4
            </div>
            <div className="card min-w-[48%] md:min-w-[24%] bg-slate-400 h-full">
              5
            </div>
            <div className="card min-w-[48%] md:min-w-[24%] bg-slate-400 h-full">
              6
            </div>
          </div>
          <i
            className="fa-solid fa-chevron-right cardRight"
            onClick={scorllRigtht}
          ></i>
        </div>
        <div className="promotion-button ">
          <button
            className="h-[48px] w-auto min-w-full max-w-[1280px] rounded-md border-[1px] border-[#676767]  text-[#676767] hover:border-[#1ebd60] hover:text-[#1ebd60]"
            onClick={handleSearch}
          >
            ดูโปรโมชันทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
