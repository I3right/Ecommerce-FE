import { useRef } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="search-box w-full flex justify-center">
      <div className="search w-[1280px] h-full flex flex-col">
        <div className="searchbar py-4 ">
          <input
            type="text"
            placeholder="ค้นหาเมนูหรือร้านอาหาร"
            className="w-full h-[40px] rounded-full bg-[#f7f7f7] pl-12"
          />
        </div>
        <div className="coupon py-4">
          <button onClick={scorllLeft}>Left</button>
          <div
            className="promotion-card h-[110px] flex gap-x-4 overflow-hidden flex-nowrap"
            ref={containerRef}
          >
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้านลดราคาสูงสุด 50%
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ใส่ Only ลด 50 บ.
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
              ใส่ small ลดสูงสุด 50 บ.
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้านใกล้คุณ
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                รวมร้านค่าส่งถูก
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                รวมร้านส่งเร็ว
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                เครื่องดื่ม
              </div>
            </Link>
          </div>
          <button onClick={scorllRigtht}>Right</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
