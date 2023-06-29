const DeliveryLocation = () => {
  return (
    <div className="Delivery-location-box w-full flex justify-center my-5 ">
      <div className="Delivery-location w-[650px] h-full overflow-hidden bg-white  ">
        <div className="py-3 px-6">
          <h2 className="text-[20px] font-[500]">ไปส่งที่</h2>
        </div>

        <div className="Delivery-location-input-box flex flex-col p-6 ">
          <div className="w-full aspect-square bg-slate-700"></div>
          <div className="Delivery-location-input p-4 flex flex-col flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-[12px] font-[400] text-[#9A9A9A]">
                Delivery arrival time
              </p>
              <h3 className="text-[20px] font-[500] text-green-600">
                40 min (14.6 km away)
              </h3>
            </div>
            <label className="input-location w-full ">
              <p className="text-[16px] text-[#1c1c1c]">ที่อยู่:</p>
              <p>13/23 เมือง เมือง เชียงใหม่</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocation;
