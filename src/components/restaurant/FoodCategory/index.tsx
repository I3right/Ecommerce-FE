import { useRef } from "react";

const FoodCategory = () => {
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
    <div className="FoodCategory-box w-full flex justify-center ">
      <div className="FoodCategory w-[1280px] h-full px-4 overflow-hidden">
        <div className="pb-3">
          <button onClick={scorllLeft}>Left</button>
          <div
            className="FoodCategory-card w-full h-full flex gap-x-1 overflow-hidden "
            ref={containerRef}
          >
            <p className="card bg-slate-400 h-full">
              ข้อเสนอวันนี้
            </p>
            <p className="card bg-slate-400 h-full">
              โปรโมชันพิเศษเฉพาะ GrabFood
            </p>
            <p className="card bg-slate-400 h-full">
              โปรสุดคุ้ม
            </p>
            <div className="card bg-slate-400 h-full">
              ข้าวไข่ข้น ง่าย ง่าย
            </div>
            <p className="card bg-slate-400 h-full">
              ข้า่วหน้าหมูทอดสุดแซ่บ
            </p>
            <p className="card bg-slate-400 h-full">
              ข้าวหน้าไก่คาราเกะ
            </p>
            <p className="card bg-slate-400 h-full">
              ข้าวหน้าปลาทอด
            </p>
            <p className="card bg-slate-400 h-full">
              เมนูข้าวสไตล์ญี่ปุ่น/เกาหลี - Japanese Rice Bowl
            </p>
            <p className="card bg-slate-400 h-full">
              สปาเก็ตตี้ - Spaghetti
            </p>
            <p className="card bg-slate-400 h-full">
              ก๋วยเตี๊ยวเส้นคลุก - Noodle
            </p>
          </div>
          <button onClick={scorllRigtht}>Right</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
