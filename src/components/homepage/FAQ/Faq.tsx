import { useState } from "react";

const Faq = () => {
  const [moreFaq, setMoreFaq] = useState(false);

  const handleMoreFaq = () => {
    console.log("add More FAQ");
    setMoreFaq(true);
  };

  return (
    <div className="FAQ">
      <h2 className="FAQ-title font-[500] text-4xl my-[40px]">
        คำถามที่พบบ่อย
      </h2>
      <div className="FAQ-content">
        <div className="FAQ-1 Faq-border_bottom">
          <h3 className="font-[500] text-2xl my-4">GrabFood คืออะไร?</h3>
          <div className="FAQ-1-content mb-[30px] text-sm">
            <p>
              GrabFood เป็นบริการจัดส่งอาหารที่รวดเร็วที่สุดในประเทศไทย
              เราได้จัดเตรียมอาหารจานโปรด ร้านอาหาร และอาหารอร่อยอื่นๆ
              ทั้งหมดของคุณ
              เพื่อช่วยให้คุณสามารถเลือกอาหารของคุณด้วยวิธีที่ง่ายและรวดเร็วที่สุดเท่าที่จะเป็นไปได้
              ค้นหาและสั่งอาหารที่คุณชื่นชอบได้จากทั่วทั้งประเทศไทย
              คุณสามารถค้นหาและสั่งอาหารจานโปรดของคุณได้ทั่วไทย
              เพียงแค่แตะไม่กี่ครั้งผ่านระบบออนไลน์ ไม่ว่าจะเป็นออน ล๊อก หยุ่น
              (On Lok Yun) ที่วังบูรพาภิรมย์สำหรับอาหารเช้า เปปเปอร์ ลันช์
              (Pepper Lunch) ที่สยามสแควร์วันสำหรับมื้อเที่ยง และไทย ไทย (Thai
              Thai Boat Noodles) ที่ถนนอังรีดูนังค์สำหรับมื้อค่ำ!
              เราอยู่ที่นี่เพื่อตอบสนองความหิวของคุณด้วยร้านพันธมิตรในประเทศไทยมากมายให้เลือกสรร
            </p>
          </div>
        </div>
        {!moreFaq && (
          <div className="promotion-button my-[24px] ">
            <button
              className="h-[48px] w-auto min-w-full max-w-[1280px] rounded-md border-[1px] border-[#676767]  text-[#676767] hover:border-[#1ebd60] hover:text-[#1ebd60]"
              onClick={() => handleMoreFaq()}
            >
              ดูโปรโมชันทั้งหมด
            </button>
          </div>
        )}
        {moreFaq && (
          <>
            <div className="FAQ-2 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">
                สั่งอาหารออนไลน์บน GrabFood อย่างไร?
              </h3>
              <div className="FAQ-2-content mb-[30px] text-sm ">
                <p className="mb-4">
                  วิธีที่ง่ายที่สุดในการสั่งอาหารจาก GrabFood ในประเทศไทย
                  มีดังนี้:
                </p>
                <ol>
                  <li>
                    <strong>ค้นหาร้านอาหารหรืออาหารที่คุณชื่นชอบ</strong>
                    <span>
                      {" "}
                      - กรอกที่อยู่ของคุณในหน้าแรก
                      แล้วดูรายชื่อร้านอาหารที่อยู่ใกล้คุณ
                      เลือกร้านอาหารที่คุณชื่นชอบ และเลือกดูเมนูอาหาร
                      แล้วจึงเลือกอาหารที่คุณต้องการสั่งซื้อ
                    </span>
                  </li>
                  <li>
                    <strong>ตรวจสอบและชำระเงิน</strong>
                    <span>
                      {" "}
                      - เมื่อคุณแน่ใจว่าคุณสั่งอาหารเพียงพอแล้ว ให้คลิกบนแท็บ
                      “ORDER NOW”
                      แล้วกรอกที่อยู่สุดท้ายสำหรับการจัดส่งอาหารของคุณ
                      เลือกวิธีการชำระเงินที่เหมาะสมกับคุณมากที่สุด แล้วชำระเงิน
                    </span>
                  </li>
                  <li>
                    <strong>การจัดส่ง</strong>
                    <span>
                      {" "}
                      - GrabFood
                      ได้รับการออกแบบวิธีการใช้งานของลูกค้าให้มีความราบรื่นสำหรับคุณ
                      ดังนั้นคุณสามารถเพลิดเพลินกับอาหารได้อย่างไม่ยุ่งยาก
                      เราจะส่งอีเมลและข้อความ SMS
                      เพื่อยืนยันคำสั่งซื้อของคุณและแจ้งเวลาที่คาดว่าคุณจะได้รับอาหารที่สั่ง
                      อาหารของคุณกำลังจะมาถึงแล้ว
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="FAQ-3 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">GrabFood ให้บริการจัดส่งอาหารทุกวัน ตลอด 24 ชั่วโมงหรือไม่?</h3>
              <div className="FAQ-3-content mb-[30px] text-sm">
                <p>
                เราเข้าใจเพียงภาษาเดียว นั่นคือ อาหาร ดังนั้น ใช่แล้ว เราให้บริการทุกวัน ตลอด 24 ชั่วโมง... โปรดรับทราบว่าแม้ว่าเราจะเป็นพันธมิตรด้านอาหารของคุณทุกวัน ตลอด 24 ชั่วโมง แต่ร้านอาหารบางแห่งในรายการของเราอาจจะมีข้อจำกัดในการจัดส่งอาหารในช่วงดึก หรืออาจจะไม่พร้อมสำหรับการสั่งซื้อ แต่เราจะมีรายชื่อสำหรับผู้ที่รับประทานอาหารยามดึกในส่วนของการจัดส่งรอบดึกของเรา
                </p>
              </div>
            </div>

            <div className="FAQ-4 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">GrabFood รับเงินสดหรือไม่?</h3>
              <div className="FAQ-4-content mb-[30px] text-sm">
                <p>
                แน่นอน เรารับเงินสด! GrabFood รับการชำระเงินในทุกรูปแบบสำหรับการบริการจัดส่งอาหาร รวมถึงเงินสดในการจัดส่งในประเทศไทย
                </p>
              </div>
            </div>

            <div className="FAQ-5 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">ฉันสามารถชำระเงินออนไลน์บน GrabFood สำหรับคำสั่งซื้ออาหารของฉันได้หรือไม่?</h3>
              <div className="FAQ-5-content mb-[30px] text-sm">
                <p>
                GrabFood รับการชำระเงินในหลากหลายรูปแบบสำหรับการสั่งอาหารออนไลน์ รวมถึงการชำระเงินออนไลน์ในประเทศไทยโดยใช้บัตรเครดิตหรือบัตรเดบิต PayPal หรือชำระเงินสดในการจัดส่ง เราขอแนะนำการใช้งาน <a href="https://www.grab.com/th/pay/" target="_blank" className="text-[#00a5cf]">GrabPay</a> ซึ่งคุณจะได้รับคะแนนสะสมเพิ่มขึ้น และคุณสามารถนำไปใช้เป็นส่วนลดในการสั่งซื้อครั้งต่อไป และการบริการอื่นๆของ Grab
                </p>
              </div>
            </div>

            <div className="FAQ-6 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">ฉันสามารถสั่ง GrabFood ให้คนอื่นได้หรือไม่?</h3>
              <div className="FAQ-6-content mb-[30px] text-sm">
                <p>
                แน่นอน เอาใจใส่คนที่คุณรักด้วยอาหารจานโปรดของพวกเขาที่จัดส่งถึงหน้าประตู เพียงอัปเดตชื่อและที่อยู่ในการจัดส่งของผู้รับ ก่อนทำการสั่งซื้อ
                </p>
              </div>
            </div>

            <div className="FAQ-7 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">GrabFood คิดค่าจัดส่งอาหารเท่าไร?</h3>
              <div className="FAQ-7-content mb-[30px] text-sm">
                <p>
                ค่าจัดส่งของเราขึ้นอยู่กับปัจจัยการดำเนินงานหลายประการ เช่น ระยะทางจากตำแหน่งของคุณไปยังร้านอาหาร เป็นต้น คุณสามารถตรวจสอบจำนวนเงินที่คุณต้องจ่ายเป็นค่าจัดส่งก่อนที่จะชำระเงินบนแอป Grab นอกจากนี้ยังมีส่วนของ “Free Delivery” ซึ่งจะมีรายชื่อร้านอาหารที่อยู่ใกล้คุณที่ไม่คิดค่าจัดส่ง
                </p>
              </div>
            </div>

            <div className="FAQ-8 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">มีร้านอาหารใดบ้างที่อยู่ใน GrabFood</h3>
              <div className="FAQ-8-content mb-[30px] text-sm">
                <p className="mb-[14px]">
                อะไรที่ไม่มีอยู่ใน GrabFood? เรามีร้านอาหารและอาหารประเภทต่างๆ ที่มากมายหลากหลายที่สุดในบรรดาแอปส่งอาหารในประเทศไทย คุณสามารถเลือกร้านอาหารนับพันร้านบน GrabFood Thailand คุณสามารถสั่งอาหารออนไลน์จากร้านอาหารที่คุณชื่นชอบทั้งหมด ไม่ว่าจะเป็น 
                <a href="https://food.grab.com/th/th/chain/bonchon-delivery" target="_blank">บอนชอน (BonChon)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/the-pizza-company-delivery" target="_blank">เดอะพิซซ่า คอมปะนี (The Pizza Company)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/mcdonalds-delivery" target="_blank">แมคโดนัลด์ (McDonald's)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/pizza-hut-delivery" target="_blank">พิซซ่าฮัท (Pizza Hut)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/texas-chicken-delivery" target="_blank">เท็กซัส ชิคเก้น (Texas Chicken)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/yayoi-japanese-restaurant-delivery" target="_blank">ยาโยอิ (Yayoi Japanese Restaurant)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/burger-king-delivery" target="_blank">เบอร์เกอร์ คิง (Burger King)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/starbucks-delivery" target="_blank">สตาร์บัคส์ (Starbucks)</a>, {' '}
                <a href="https://food.grab.com/th/th/chain/coco-ichibanya-delivery" target="_blank">โคโค่ อิฉิบันยะ (Coco Ichibanya) </a>
                และอื่นๆ อีกมากมาย
                </p>
                <p>นอกจากนี้ GrabFood ยังมีโปรโมชัน ข้อเสนอ และส่วนลดพิเศษสำหรับร้านอาหารในรายการของเราในเวลาจำกัด คุณสามารถเพลิดเพลินกับส่วนลดมากมาย และข้อเสนออื่นๆ อีกมากมายสำหรับการสั่งอาหารของคุณ ตอนนี้ถึงเวลาไปรับอาหารนั่นแล้ว!</p>
              </div>
            </div>

            <div className="FAQ-9 Faq-border_bottom">
              <h3 className="font-[500] text-2xl my-4">GrabFood มีคำสั่งซื้อขั้นต่ำหรือไม่?</h3>
              <div className="FAQ-9-content mb-[30px] text-sm">
                <p>
                ใช่แล้ว! แต่คุณสามารถชำระเงินส่วนต่าง ถ้าคำสั่งซื้อของคุณน้อยกว่ายอดคำสั่งซื้อขั้นต่ำ
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Faq;
