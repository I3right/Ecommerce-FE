import foodImage from "@/assets/image/homepage/bottom-food-options.svg";
import useOurApp from "@/assets/image/homepage/ilus-cool-features-app.svg";
import logoAppStore from "@/assets/image/homepage/logo-appstore.svg";
import logoPlayStore from "@/assets/image/homepage/logo-playstore.svg";

const Ads = () => {
  return (
    <div className="ads flex justify-center py-[100px] bg-[#f7f7f7]">
      <div className="order-your-food w-[600px] flex flex-col ">
        <figure className="flex justify-center">
          <img src={foodImage} alt="logo order food" />
        </figure>
        <figcaption className="flex flex-col text-center ">
          <p className="mb-4">
            <strong>ร้านอาหารตามสั่ง</strong>
          </p>
          <p className="text-[14px] text-[#676767]">
            สั่งน้อยก็ได้ สั่งมากก็ดี ไม่มีจำกัดจำนวนขั้นต่ำ
            เลือกได้ทุกอย่างที่คุณต้องการ
          </p>
        </figcaption>
      </div>

      <div className="easy-to-pay w-[600px] flex flex-col ">
        <figure className="flex justify-center">
          <img
            src={useOurApp}
            alt="logo order food"
            className="aspect-square w-[150px]"
          />
        </figure>
        <figcaption className="flex flex-col text-center">
          <p className="mb-4">
            <strong>สั่งง่าย สะดวกยิ่งขึ้นเมื่อใช้แอปฯ</strong>
          </p>
          <p  className="text-[14px] text-[#676767]">
            ดาวน์โหลดแอปฯ Grab เพื่อชำระคำสั่งซื้ออย่างสะดวก รวดเร็ว
            พร้อมติดต่อกับคนขับได้โดยตรง
          </p>
        </figcaption>
        <div className="flex gap-4 justify-center mt-8">
          <img src={logoAppStore} alt="logo Download App store" />
          <img src={logoPlayStore} alt="logo Download play store" />
        </div>
      </div>
    </div>
  )
}

export default Ads