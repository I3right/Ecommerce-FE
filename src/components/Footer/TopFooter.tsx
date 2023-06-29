import logoMono from "@/assets/image/homepage/logo-grabfood-mono.svg";

const TopFooter = () => {
  return (
    <div className="footerTop-box flex justify-center pt-[44px] pb-[12px] bg-[#eaeff2]">
      <div className="footerTop w-[1280px] h-full px-4 overflow-hidden">
        <figure className="mb-[24px]">
          <img src={logoMono} alt="" />
        </figure>
        <div className="footerTop-content-group flex w-full h-[530px]">
          <div className="footerTop-content top-search flex-1">
            <h3>คำค้นหายอดนิยม</h3>
            <p>เมนูร้านอาฟเตอร์ยู</p>
            <p>เมนูร้านบอนชอน</p>
            <p>สั่ง เบอร์เกอร์คิง เดลิเวอรี</p>
            <p>สั่ง โคโค่ อิฉิบันยะ เดลิเวอรี</p>
            <p>เมนูร้านฟูจิ เรสเตอรองท์</p>
            <p>สั่ง คามุที เดลิเวอรี</p>
            <p>เมนูเครื่องดื่มร้านโคอิเตะ</p>
            <p>สั่ง แมคโดนัลด์ เดลิเวอรี</p>
            <p>เมนูร้านเดอะ พิซซ่า คอมปะนี</p>
            <p>สั่ง พิซซ่าฮัท เดลิเวอรี</p>
            <p>สั่ง โปเตโต้ คอร์เนอร์ เดลิเวอรี</p>
            <p>สั่ง ชินคันเซ็น ซูชิ เดลิเวอรี</p>
            <p>เมนูเครื่องดื่มร้านสตาร์บัคส์</p>
            <p>สั่ง ซูชิฮิโระ เดลิเวอรี</p>
            <p>สั่ง สเวนเซ่นส์ เดลิเวอรี</p>
            <p>เมนูร้านเท็กซัส ชิคเก้น</p>
            <p>สั่ง ยาโยอิ เดลิเวอรี</p>
          </div>
          <div className="footerTop-content top-menu flex-1">
            <h3>อาหารยอดนิยม</h3>
            <p>ชานมไข่มุก</p>
            <p>กาแฟ</p>
            <p>ข้าวมันไก่</p>
            <p>ก๋วยเตี๋ยว</p>
            <p>ผัดไทย</p>
            <p>พิซซ่า</p>
            <p>ขนม</p>
            <p>ซูชิ</p>
          </div>
          <div className="footerTop-content about-grab  flex-1">
            <h3>เกี่ยวกับ Grab</h3>
            <p>เกี่ยวกับ Grab</p>
            <p>เกี่ยวกับ GrabFood</p>
            <p>บล็อก</p>
          </div>
          <div className="footerTop-content services flex-1">
            <h3>บริการช่วยเหลือ</h3>
            <p>ศูนย์ช่วยเหลือ</p>
            <p>คำถามที่พบบ่อย</p>
            <p>ขับรถกับ Grab</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
