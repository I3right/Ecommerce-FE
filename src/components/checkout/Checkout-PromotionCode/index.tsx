const CheckoutPromotionCode = () => {
  return (
    <div className="checkout-promotion-code-box w-full flex justify-center my-5 ">
      <div className="checkout-promotion-code w-[650px] h-full overflow-hidden bg-white  ">
        <div className="py-3 px-6 checkout-promotion-code-header">
          <h2 className="text-[20px] font-[500]">การส่งเสริม</h2>
        </div>
        <div className="p-6 checkout-promotion-code-menu flex">
          <input className="flex-1" type="text" placeholder="เพิ่มรหัสโปรโมชัน"/>
          <button className=" w-[150px] bg-slate-600">ใช้</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPromotionCode;
