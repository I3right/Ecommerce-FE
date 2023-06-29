const CheckoutLocation = () => {
  return (
    <div className="checkout-location-box w-full flex justify-center my-5 ">
      <div className="checkout-location w-[650px] h-full overflow-hidden bg-white  ">
        <div className="py-3 px-6">
          <h2 className="text-[20px] font-[500]">ไปส่งที่</h2>
        </div>
        <div className="p-6">
          <p className="text-[12px] font-[400] text-[#9A9A9A]">
            Delivery arrival time
          </p>
          <h3 className="text-[14px] font-[500] text-[#1c1c1c]">
            40 min (14.6 km away)
          </h3>
        </div>
        <div className="checkout-location-input-box flex p-6 ">
          <div className="w-[170px] h-[170px] bg-slate-700"></div>
          <div className="checkout-location-input p-4 flex flex-col flex-1">
            <label className="input-location w-full mb-6 ">
              <p className="text-[12px] text-[#9A9A9A]">ที่อยู่</p>
              <input type="text" placeholder="โปรดกรอกที่อยู่" />
            </label>
            <label className="input-location-detail w-full mb-6">
              <p className="text-[12px] text-[#9A9A9A]">รายละเอียดที่อยู่</p>
              <input type="text" placeholder="เช่น ชั้น ชื่ออาหาร" />
            </label>
            <label className="input-location-rider w-full mb-6">
              <p className="text-[12px] text-[#9A9A9A]">หมายเหตุถึงคนขับ</p>
              <input type="text" placeholder="เช่น วางอาหารไว้ที่ล็อบบี้" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLocation;
