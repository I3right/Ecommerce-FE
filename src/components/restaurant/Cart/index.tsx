const Cart = () => {
  return (
    <div className="cart-box w-full min-h-full flex justify-end items-center absolute top-0 z-30 bg-blue-40">
      <form className="cart w-[40%] h-[70vh] bg-red-300 flex flex-col justify-between">
        <main className="p-6 flex flex-col gap-3">
          <header className="flex gap-24">
            <button>x</button>
            <div>
              <h2>ตะกร้า</h2>
              <p>ระยะเวลาการจัดส่ง</p>
            </div>
          </header>
          <div className="cart-detail flex flex-col gap-3">
            <h2>ร้าน พอท & แพน - ถนน สันป่าตอง - แม่วาง</h2>
            <div className="menu flex gap-[2rem]">
              <figure className="w-[100px] h-[100px]">
                <div className="foodimg w-full h-full bg-green-500">
                  Foodimg
                </div>
              </figure>
              <div className="flex justify-between w-full">
                <div className="menu-detail">
                  <p className="text-[20px] font-[500]">
                    ข้าวแกงกะหรี่ญี่ปุ่น หมูทอด
                  </p>
                  <p className="text-[14px] font-[400] text-[#9a9a9a]">
                    ไข่ดาว
                  </p>
                </div>
                <div className="price-ddetail">
                  <p className="price-discount">90</p>
                  <p className="price">99</p>
                </div>
              </div>
            </div>
            <div className="menu flex gap-[2rem]">
              <figure className="w-[100px] h-[100px]">
                <div className="foodimg w-full h-full bg-green-500">
                  Foodimg
                </div>
              </figure>
              <div className="flex justify-between w-full">
                <div className="menu-detail">
                  <p className="text-[20px] font-[500]">
                    ข้าวแกงกะหรี่ญี่ปุ่น หมูทอด
                  </p>
                </div>
                <div className="price-ddetail">
                  <p className="price-discount">90</p>
                  <p className="price">99</p>
                </div>
              </div>
            </div>
            <div className="menu flex gap-[2rem]">
              <figure className="w-[100px] h-[100px]">
                <div className="foodimg w-full h-full bg-green-500">
                  Foodimg
                </div>
              </figure>
              <div className="flex justify-between w-full">
                <div className="menu-detail">
                  <p className="text-[20px] font-[500]">
                    ข้าวแกงกะหรี่ญี่ปุ่น หมูทอด
                  </p>
                  <p className="text-[14px] font-[400] text-[#9a9a9a]">
                    ไข่เจียว
                  </p>
                </div>
                <div className="price-ddetail">
                  <p className="price-discount">90</p>
                  <p className="price">99</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-sumarize flex justify-between">
            <div>
              <p>ค่าอาหาร</p>
              <p>ค่าจัดส่งจะแสดงในหน้ายืนยันคำสั่งซื้อ</p>
            </div>
            <p>500 - ฿</p>
          </div>
        </main>
        <footer className="flex flex-col items-center gap-y-3 p-6">
          <div className="w-full flex justify-between">
          <p>ค่าใช้จ่ายทั้งหมด</p>
          <p>500 - ฿</p>
          </div>
          <button>ตรวจสอบสินค้า</button>
        </footer>
      </form>
    </div>
  );
};

export default Cart;
