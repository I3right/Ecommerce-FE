import logoAppStore from "@/assets/image/homepage/logo-appstore.svg";
import logoPlayStore from "@/assets/image/homepage/logo-playstore.svg";

const BottomFooter = () => {
  return (
    <div className="footerBottom-box flex justify-center bg-[#363a45] pt-[32px] pb-[48px] text-white">
      <div className="footerBottom w-[1280px] h-full px-4 overflow-hidden">
        <div className="flex justify-between mb-[32px]">
          <div className="country ">
            <h3 className="mb-2">ประเทศที่ให้บริการ GrabFood</h3>
            <p className="text-[14px] font-[400]">
              อินโดนีเซีย | ฟิลิปปินส์ | ไทย | เวียดนาม | สิงคโปร์ | มาเลเซีย
              |พม่า
            </p>
          </div>
          <div className="social flex gap-[20px]">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
          </div>
        </div>

        <div className="terms flex justify-between">
          <div className="country ">
            <p className="text-[#afb0b4] font-[400]">© Grab 2023</p>
            <p className="text-[14px] font-[400]">
              เงื่อนไขในการให้บริการ • นโยบายความปลอดภัย
            </p>
          </div>
          <div className="social flex gap-[20px]">
              <img src={logoAppStore} className='w-[120px]' alt="logo Download App store" />
              <img src={logoPlayStore} className='w-[120px]' alt="logo Download play store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
