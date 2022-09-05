import CheckoutItems from "../../components/checkout-items/checkout-items-component";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, PaymentButton  } from "./checkout-styles";
import { Link } from "react-router-dom";


const Checkout = () => {
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quanity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            <CheckoutItems />
            <Link to={'/payment'}>
                <PaymentButton title={'Pay Now'} />
            </Link>
        </CheckoutContainer>
    )
}

export default Checkout;