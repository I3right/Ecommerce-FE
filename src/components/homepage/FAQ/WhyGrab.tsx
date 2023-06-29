const WhyGrab = () => {
  return (
    <div className="whyGrab">
      <h2 className="whyGrab-title font-[500] text-4xl mb-[40px]">
        ทำไมต้องเป็น GrabFood?
      </h2>
      <ul className="whyGrab-bullet">
        <li className="my-4 text-[14px]">
          <strong>รวดเร็วที่สุด </strong>- GrabFood
          ให้บริการจัดส่งอาหารที่รวดเร็วที่สุดในตลาด
        </li>
        <li className="my-4 text-[14px]">
          <strong>ง่ายที่สุด </strong>- ตอนนี้การสั่งอาหารของคุณนั้น
          ง่ายดายเพียงไม่กี่คลิกบนหน้าจอ สั่งอาหารออนไลน์หรือดาวน์โหลด Grab
          ซูเปอร์แอปของเราเพื่อประสบการณ์ความรวดเร็วและความคุ้มค่ามากยิ่งขึ้น
        </li>
        <li className="my-4 text-[14px]">
          <strong>อาหารสำหรับทุกความปรารถนา </strong>-
          ตั้งแต่อาหารท้องถิ่นไปจนถึงอาหารจานโปรด
          ตัวเลือกอาหารที่หลากหลายของเราจะตอบสนองต่อทุกความต้องการของคุณ
        </li>
        <li className="my-4 text-[14px]">
          <strong>ชำระเงินได้อย่างง่ายดาย </strong>-
          การจัดส่งอาหารให้คุณเป็นเรื่องง่าย
          แม้แต่การชำระเงินก็ง่ายและสะดวกมากยิ่งขึ้นด้วย GrabPay
        </li>
        <li className="my-4 text-[14px]">
          <strong>รางวัลตอบแทนมากขึ้น </strong>- รับคะแนนสะสม GrabRewards
          สำหรับทุกคำสั่งซื้อของคุณ และใช้คะแนนแลกของรางวัลเพิ่มเติม
        </li>
      </ul>
    </div>
  );
};

export default WhyGrab;
