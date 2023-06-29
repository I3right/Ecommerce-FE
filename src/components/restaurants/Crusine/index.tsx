import { useRef } from "react";
import { Link } from "react-router-dom";

const Crusine = () => {
  const text =
    "Sanam Bin Rd, Suthep, Mueang Chiang Mai, Chiang Mai, 50200, Thailand";
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
    <div className="crusine-box w-full flex justify-center">
      <div className="crusine w-[1280px] flex flex-col  ">
        <div className="navigator pt-10 pb-2">
          <Link to="/" className="text-[#00a5cf]">
            หน้าหลัก
          </Link>
          <i className="fa-solid fa-chevron-right px-3"></i>
          <span>ร้านอาหาร</span>
        </div>

        <div className="crusineNearby">
          <h2 className="text-4xl font-[500] pb-10">ร้านดังใกล้คุณ</h2>
          <button onClick={scorllLeft}>Left</button>
          <div
            className="crusineNearby-card h-[110px] flex gap-x-3 overflow-hidden flex-nowrap"
            ref={containerRef}
          >
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้าน A
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้าน B
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้าน C
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้าน D
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้าน E
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้าน F
              </div>
            </Link>
            <Link
              to="/restaurant/store1"
              className="card min-w-[50%] md:min-w-[15%] bg-slate-400 h-full"
            >
              <div className="w-full h-full flex justify-center items-center">
                ร้าน G
              </div>
            </Link>
          </div>
          <button onClick={scorllRigtht}>Right</button>
        </div>

        <div className="opened pb-10">
          <div className="opened-header font-[500] text-4xl overflow-hidde py-10">
            <h2 className="crusineOpen-header-text ">
              พร้อมให้บริการใน <span className="text-green-600 ">{text}</span>
            </h2>
          </div>

          <div className="crusineOpen-card flex justify-between gap-y-4 gap-x-1 md:gap-x-0 flex-wrap">
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              1
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              2
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              3
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              4
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              5
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              6
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              7
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              8
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              9
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              10
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              11
            </div>
            <div className="card min-w-[49%] md:min-w-[16%] bg-slate-400 h-full">
              12
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crusine;
