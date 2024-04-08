// Order.jsx
import React, { useEffect, useState } from 'react';
import './Order.css';

function Order({ onPaymentComplete }) {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  useEffect(() => {
    if (isPaymentOpen) {
      const handlePayment = async () => {
        try {
          // Fetch the price from the DOM
          const priceElement = document.querySelector('.price');
          if (!priceElement) {
            throw new Error("Price element not found");
          }
          const priceText = priceElement.textContent || priceElement.innerText;
          const amount = parseFloat(priceText.replace('MRP: Rs. ', '').replace('/-', '')) * 100;

          const options = {
            key: "rzp_test_m3BUdDY8FcNAGc", // Replace with your Razorpay Key ID
            amount: amount,
            currency: "INR",
            name: "Blind Faith",
            description: "Test Transaction",
            image: "apparel.svg",
            handler: (response) => {
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);
              onPaymentComplete(); // Call the function provided by the parent component
            },
            prefill: {
              name: "",
              email: "",
              contact: "",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        } catch (error) {
          console.error("Error handling payment:", error);
        }
      };

      handlePayment(); // Call handlePayment when isPaymentOpen becomes true
    }
  }, [isPaymentOpen, onPaymentComplete]);

  // This function will be called when the Buy Now button is clicked
  const openPaymentGateway = () => {
    setIsPaymentOpen(true); // Set isPaymentOpen to true to open the payment gateway
  };

  return (
    <section id="order">
      <div className='orderTitle' >Buy Now</div>
      <button className='paymentBtn' onClick={openPaymentGateway}>Proceed to Pay</button>
    </section>
  );
}

export default Order;
