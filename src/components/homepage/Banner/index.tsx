import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/restaurants");
  };

  return (
    <div className="banner-box w-full h-[52vh] flex justify-center">
      <div className="banner w-[1280px] h-full">
        <div className="location px-[24px] py-[48px]">
          <div className="location-word font-[100] mb-[24px] ">
            <p className="welcome text-[20px] font-[500]">ยินดีต้อนรับ</p>
            <p className="greeting text-[36px] font-[500]">
              ต้องการให้เราไปส่ง
              <br />
              อาหารที่ไหน?
            </p>
          </div>
          <div className="location-input w-full mb-[12px]">
            <input
              type="text"
              className="w-full h-[48px]"
              placeholder="ระบุตำแหน่งของคุณ"
            />
          </div>
          <div className="location-button w-full">
            <button
              className="bg-[#00b14f] w-full h-[48px] text-white"
              onClick={handleSearch}
            >
              ค้นหา
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
