const DeliveryRider = () => {
  return (
    <div className="Delivery-Rider-box w-full flex justify-center my-5 ">
      <div className="Delivery-Rider w-[650px] h-full overflow-hidden bg-white  ">
        <div className="py-3 px-6 Delivery-Rider-header">
          <h2 className="text-[20px] font-[500]">ไรเดอร์</h2>
        </div>
        <div className="p-6 Delivery-Rider-menu flex w-full ">
          <div className="menu flex gap-[2rem] w-full ">
            <figure className="min-w-[100px] h-[100px]">
              <div className="RiderImg w-full h-full bg-blue-500">
                Rider img
              </div>
            </figure>
            <div className="flex justify-between w-full ">
              <div className="menu-detail">
                <p className="text-[20px] font-[500]">(GB)สมชาย ส่งอาหารเก่ง</p>
                <p className="text-[14px] font-[400] text-yellow-300 ">
                  <i className="fa-solid fa-star pr-2 "></i>
                  <span className="text-black">4.4</span>
                </p>
              </div>
              <div className="Rider-contact flex gap-5 text-[25px]">
                <div className="callRider">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="messageRider">
                  <i className="fa-solid fa-message"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryRider;
