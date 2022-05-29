import CheckoutItems from "../../components/checkout-item/checkout-item-component";
import './checkout-styles.scss';

const Checkout = () => {
    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Prduct</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quanity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <CheckoutItems />
        </div>
    )
}

export default Checkout;