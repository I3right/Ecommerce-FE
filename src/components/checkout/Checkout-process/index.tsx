const CheckoutProcess = () => {
  return (
    <div className="checkout-process-box w-full flex justify-center bg-white py-6">
      <div className="checkout-process w-[650px] h-full overflow-hidden flex justify-between px-8 ">
        <div>
        <p className="text-[20px] font-[500]">รวมทั้งหมด</p>
        <p className="text-[20px] font-[500]">฿ - 167</p>
        </div>
        <button className="text-[20px] font-[500] bg-green-500 p-4 rounded-md">สิ่งซื้อ</button>
      </div>
    </div>
  );
};

export default CheckoutProcess;
