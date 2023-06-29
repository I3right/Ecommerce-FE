import DeliveryLocation from '@/components/delivery/Delivery-Location'
import DeliveryOrder from '@/components/delivery/Delivery-Order'
import DeliveryRider from '@/components/delivery/Delivery-Rider'
import DeliveryTitle from '@/components/delivery/Delivery-title'
import NavbarCheckout from '@/components/Nav/NavbarCheckout'

const Delivery = () => {
  return (
    <section className="Delivery bg-[#f7f7f7] min-h-screen pb-3">
      <NavbarCheckout/>
      <DeliveryTitle/>
      <DeliveryLocation/>
      <DeliveryOrder/>
      <DeliveryRider/>
    </section>
  )
}

export default Delivery