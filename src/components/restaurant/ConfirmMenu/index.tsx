const ConfirmMenu = () => {
  return (
    <div className="confirm-box w-full min-h-full flex justify-end items-center absolute top-0 z-30 bg-blue-40">
      <form className="confirm w-[40%] h-[70vh] bg-red-300 flex flex-col justify-between">
        <main>
          <header>
            <button>x</button>
          </header>
          <div className="menu p-6 flex gap-[2rem]">
            <figure className="w-[100px] h-[100px]">
              <div className="foodimg w-full h-full bg-green-500">Foodimg</div>
            </figure>
            <div className="flex justify-between w-full">
              <div className="menu-detail">
                <p className="text-[20px] font-[500]">
                  ข้าวแกงกะหรี่ญี่ปุ่น หมูทอด
                </p>
                <p className="text-[14px] font-[400] text-[#9a9a9a]">
                  มีส่วนผสมของมัน และแครอท (น้ำแกงไม่มีเนื้อสัตว์)
                </p>
              </div>
              <div className="price-ddetail">
                <p className="price-discount">90</p>
                <p className="price">99</p>
              </div>
            </div>
          </div>
          <div className="menu-option p-6">
            <h2>ออฟชัน</h2>

            <label className="option1 flex justify-between">
              <div className="flex gap-3">
                <input type="checkbox" value="option1" id="option1" />
                <span>ไข่ดาว</span>
              </div>
              <span>15</span>
            </label>
            
            <label className="option1 flex justify-between">
              <div className="flex gap-3">
                <input type="checkbox" value="option1" id="option1" />
                <span>ไข่ดาว</span>
              </div>
              <span>15</span>
            </label>
            
            <label className="option1 flex justify-between">
              <div className="flex gap-3">
                <input type="checkbox" value="option1" id="option1" />
                <span>ไข่ดาว</span>
              </div>
              <span>15</span>
            </label>
            
          </div>
        </main>
        <footer className="flex gap-x-3">
          <button>-</button>
          <p>state</p>
          <button>+</button>
          <button>Add to basket</button>
        </footer>
      </form>
    </div>
  );
};

export default ConfirmMenu;
