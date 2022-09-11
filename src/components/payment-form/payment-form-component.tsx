import { useState, FormEvent } from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { BUTTON_THEME } from "../button/button-component";
import { PaymentFormStyle, CardElementStyle, FormContainer, PaymentButton } from "./payment-form-style";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectTotalPrice } from "../../store/cartDropdown/cartDropdown.selector";
import { StripeCardElement } from "@stripe/stripe-js";

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectTotalPrice);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }
  };

  return (
    <FormContainer>
      <PaymentFormStyle onSubmit={paymentHandler}>
          <h1>Payment Form</h1>
          <CardElementStyle />
          <PaymentButton isLoading={isProcessingPayment} title='Pay Now' theme={BUTTON_THEME.inverted} />
      </PaymentFormStyle>
      {isProcessingPayment ? <h3>Processing Payment...</h3> : <h3>Total Price: {amount}</h3>}
    </FormContainer>
  );
};

export default PaymentForm;

// const PaymentForm = () => {
    
//     const navivate = useNavigate();

//     const [isProcessingPayment, setIsProcessingPayment] = useState(false);

//     const currentUser = useSelector(selectCurrentUser);
//     const totalPrice = useSelector(selectTotalPrice);

//     const stripe = useStripe();
//     const elements = useElements();

//     const paymentHandler = async(e) => {
//         e.preventDefault();

//         if(!stripe || !elements) {
//             return;
//         }

//         setIsProcessingPayment(true);
//         const response = await fetch('/.netlify/functions/create-payment-intent', {
//             method: 'post',
//             headers: {
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify({amount: totalPrice * 100})
            
//         }).then(res => res.json())

        
//         const {paymentIntent: {client_secret}} = response;
//         // console.log(client_secret);

//         try{

//             const cardDetails = elements.getElement(CardElement);

//             if(cardDetails === null) return;

//             const paymentResult = await stripe.confirmCardPayment(client_secret, {
//                 payment_method: {
//                     card: cardDetails,
//                     billing_details: {
//                         name: currentUser ? currentUser.displayName : 'Guest'
//                     }
//                 }
//             })
//             setIsProcessingPayment(false);
//             if(paymentResult.paymentIntent && paymentResult.paymentIntent.status === 'succeeded'){
                
//                 alert('Payment Successful');
//                 navivate('/thankyou');
//             }
            
//         }catch(error){
//             console.log(error);
//         }

//     }
//     return (
//         <>
        // <FormContainer>
        //     <PaymentFormStyle onSubmit={paymentHandler}>
        //         <h1>Payment Form</h1>
        //         <CardElementStyle />
        //         <PaymentButton isLoading={isProcessingPayment} title='Pay Now' theme={BUTTON_THEME.inverted} />
        //     </PaymentFormStyle>
        //     {isProcessingPayment ? <h3>Processing Payment...</h3> : <h3>Total Price: {totalPrice}</h3>}
        // </FormContainer>
        
//         </>
//     )
// }

// export default PaymentForm;