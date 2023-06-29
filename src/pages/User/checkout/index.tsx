import CheckoutLocation from '@/components/checkout/Checkout-Location'
import CheckoutOrder from '@/components/checkout/Checkout-Order'
import CheckoutPromotionCode from '@/components/checkout/Checkout-PromotionCode'
import CheckoutProcess from '@/components/checkout/Checkout-process'
import CheckoutTitle from '@/components/checkout/Checkout-title'
import NavbarCheckout from '@/components/Nav/NavbarCheckout'

const Checkout = () => {
  return (
    <div className="checkout bg-[#f7f7f7]">
      <NavbarCheckout/>
      <CheckoutTitle/>
      <CheckoutLocation/>
      <CheckoutOrder/>
      <CheckoutPromotionCode/>
      <CheckoutProcess/>
    </div>
  )
}

export default Checkout