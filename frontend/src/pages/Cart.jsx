import Navbar from "../Components/Navbar"
import PageHeader from '../Components/PageHeader';
import ButtonThree from "../Components/Buttons/ButtonThree";

import { useAuthContext } from "../Context/AuthContext";
import useStore from "../Zustand/Store";
import { useNavigate } from "react-router-dom";

import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";

import Footer from "../Components/Footer/Footer";
import { useSelector } from 'react-redux';
import CartSummary from "../utils/CartSummary";

const Cart = () => {

  const navigate = useNavigate();
  const vehicle = useSelector(state => state.vehicle)
  const brand = vehicle.brand?.brand_name;
  const model = vehicle.model?.model_name;
  const fuel = vehicle.fuel?.type;
  const {authUser} = useAuthContext();
  const {cart, updateCart} = useStore();



  const discount = 0;
  const subTotal = cart?.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveItem = (item) => {
    const tempCart = cart?.filter(cartItem => cartItem !== item);
    updateCart(tempCart)
  }

  const handleCheckout = async () => {
    const amount = Math.round(subTotal - (subTotal*discount)/100);
        try {

            let res = await fetch("/api/getKey");
            const key = await res.json();
            
            res = await fetch("/api/service/checkout/xz98ty33ch92sr", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({amount})
            });

            const order = await res.json();

            const options = {
                key: key.key,
                amount: order.amount, 
                currency: "INR",
                name: "AutoFixers",
                description: "Service Booking Transaction",
                image: "https://example.com/your_logo",
                order_id: order.id, 
                handler: async (response) => {
                    try {
                        res = await fetch("/api/service/verification/xz98yu32vf92sr", {
                            method: "POST",
                            headers: {"Content-Type":"application/json"},
                            body: JSON.stringify(response)
                        });

                        const razorpay_payment_id = await res.json();

                        const purchasedServices = [];
                        cart?.forEach((item) => {
                          purchasedServices.push({
                            serviceName: item.name,
                            serviceCharge: item.price
                          })
                        });

                        res = await fetch("/api/service/new-booking/xz98rt32nb92sr", {
                            method: "POST",
                            headers: {"Content-type":"application/json"},
                            body: JSON.stringify({
                              email: authUser.email,
                              purchasedServices: purchasedServices,
                              amount: subTotal,
                              totalAmount: Number(order.amount),
                              discount: discount,
                              paymentId: razorpay_payment_id,
                          })
                        });

                        const newBooking = await res.json();
                        if(newBooking.error){
                          throw new Error(newBooking.error);
                        }
                        
                        toast.success("Booked Successfully")
                        navigate(`/payment-success?referenceId=${razorpay_payment_id}`);
                    } catch (error) {
                        console.log(error.message);
                        toast.error("Payment Error");
                        navigate("/payment-failed");
                    }
                },
                prefill: { 
                    name: authUser.username,
                    email: authUser.email, 
                },
                notes: {
                    address: "AutoFixers Corporate Office"
                },
                theme: {
                    color: "#f5222d"
                }
            };
            const razor = new window.Razorpay(options);
            razor.open();

        } catch (error) {
            console.error(error.message);
            toast.error("Payment Failed");
            navigate("/payment-failed");
        }
  }



  return (
    <>
      <Navbar selectedTab="none"/>
      <PageHeader heading="Cart"/>

      <section>
        <div className="container-xl">
          <div className="flex justify-between p-4 md:p-10 border-b">
            <div className="col-md-6">
              <h1 className="item--title !text-2xl md:!text-4xl">Service Name</h1>
            </div>
            <div className="col-md-6">
              <h1 className="item--title !text-2xl md:!text-4xl">Price</h1>
            </div>
          </div>

          
          {cart.map((item,i) => (
            <div key={i} className="flex justify-between p-4 md:p-10 border-b">
              <div className="col-md-6">
                <h1 className="text-2xl font-Montserrat font-light">
                  {item.name}
                </h1>
                </div>
              <div className="col-md-3">
                <h1 className="text-2xl font-Montserrat font-light">
                  &#8377;{item.price}
                </h1>
              </div>
              <div className="col-md-3 flex justify-end items-center">
                <span className="bg-[var(--color-one)] p-2 rounded-lg cursor-pointer"
                  onClick={() => handleRemoveItem(item)}
                >
                  <IoMdClose size={25}/>
                </span>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between p-4 md:p-10">
            <div className="col-md-6">
              <h1 className="text-2xl font-Montserrat font-bold">
                Sub Total
              </h1>
              </div>
            <div className="col-md-6">
              <h1 className="text-2xl font-Montserrat font-bold">
                &#8377;{subTotal}
              </h1>
            </div>
          </div>

          
          {/* MARK: Cart Card */}

          <div className="col-lg-6 mt-20 bg-[#403f3f]"> 
            <div className="p-4 md:p-10">
              <div>
                <div className="divider-img"/>
                <h1 className="item--title">Cart Summary</h1>
              </div>
              <CartSummary first="Brand" second={brand}/>
              <CartSummary first="Model" second={model}/>
              <CartSummary first="Fuel Type" second={fuel}/>
              <CartSummary first="Sub Total" second={`\u20B9${subTotal}`}/>
              <CartSummary first="Discount" second={discount}/>
              <CartSummary first="Total" second={`\u20B9${subTotal - (subTotal*discount)/100}`}/>
              {authUser ? (
                cart.length === 0 ? (
                  <ButtonThree firstText="Add Something To Cart" onClick={() => navigate("/services")}/>
                ):(
                  <ButtonThree firstText="CheckOut" onClick={handleCheckout}/>
                )
              ):(
                <ButtonThree firstText="Login" onClick={() => navigate("/login")}/>
              )}
            </div>
          </div>

        </div>
      </section>


      <section />
      <Footer />
    </>
  )
}

export default Cart
