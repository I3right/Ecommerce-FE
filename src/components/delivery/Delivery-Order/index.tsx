const DeliveryOrder = () => {
  return (
    <div className="Delivery-order-box w-full flex justify-center my-5 ">
      <div className="Delivery-order w-[650px] h-full overflow-hidden bg-white  ">
        <div className="py-3 px-6 Delivery-order-header">
          <h2 className="text-[20px] font-[500]">สรุปคำสั่งซื้อ</h2>
        </div>
        <div className="p-6 Delivery-order-menu">
          <div className="menu flex gap-[2rem]">
            <figure className="min-w-[100px] h-[100px]">
              <div className="foodimg w-full h-full bg-green-500">Foodimg</div>
            </figure>
            <div className="flex justify-between w-full">
              <div className="menu-detail">
                <p className="text-[20px] font-[500]">
                  ข้าวแกงกะหรี่ญี่ปุ่น หมูทอด
                </p>
                <p className="text-[14px] font-[400] text-[#9a9a9a]">ไข่ดาว</p>
              </div>
              <div className="price-ddetail">
                <p className="price-discount">90</p>
                <p className="price">99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Delivery-order-sum-box flex flex-col p-6 w-full">
          <div className="text-[14px] text-[#1c1c1c] flex justify-between">
            <p>รวมค่าอาหาร</p>
            <p>฿39</p>
          </div>
          <div className="text-[14px] text-[#1c1c1c] flex justify-between">
            <p>ค่าจัดส่ง</p>
            <p>฿112</p>
          </div>
          <div className="text-[14px] text-[#1c1c1c] flex justify-between">
            <p>ค่าคำสั่งซื้อขนาดเล็ก</p>
            <p>฿16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOrder;
