import React from 'react';
import './purchaseFormModule.scss';
import toggleElementDisplay from '../../helperFunctions/displayToggler';
import mastercard from './../../static/mastercard.png';
import visa from './../../static/visa.png';
import americanExpress from './../../static/american-express.png';
import gold from './../../static/pile-of-gold.png';
import {
  cardNumberInitialValidator,
  validateForm,
  dateInitialValidator,
  cvvInitialValidator,
} from '../../helperFunctions/formValidator';

function PurchaseFormModule() {
  return (
    <div className="pchs-module-overlay hidden dissolved">
      <div className="pchs-module">
        <img className="pchs-module__gold" src={gold} />
        <button
          className="pchs-module__close-btn"
          onClick={() => {
            toggleElementDisplay('.pchs-module-overlay');
            document.body.style.overflow = 'visible';
          }}
        ></button>
        <p className="pchs-module__header">Checkout</p>
        <p className="pchs-module__message">
          Please, enter your details and choose payment method
        </p>
        <form className="pchs-form">
          <div className="pchs-form__field">
            <label htmlFor="customer-name">Full name</label>
            <input
              className="form-field"
              type="text"
              name="customer-name"
              maxLength={40}
              id="customer-name"
            />
            <span className="form-error-msg error-msg__name hidden">
              Enter your name correctly
            </span>
          </div>
          <div className="pchs-form__field">
            <label htmlFor="customer-number">Phone Number</label>
            <input
              className="form-field"
              type="text"
              name="customer-number"
              maxLength={30}
              id="customer-number"
            />
            <span className="form-error-msg error-msg__number hidden">
              Enter phone number correctly
            </span>
          </div>
          <div className="pchs-form__field">
            <label htmlFor="customer-address">Shipping Address</label>
            <input
              className="form-field"
              type="text"
              name="customer-address"
              maxLength={100}
              id="customer-address"
            />
            <span className="form-error-msg error-msg__address hidden">
              Enter address correctly
            </span>
          </div>
          <div className="pchs-form__field">
            <label htmlFor="customer-email">E-mail</label>
            <input
              className="form-field"
              type="text"
              name="customer-email"
              maxLength={40}
              id="customer-email"
            />
            <span className="form-error-msg error-msg__email hidden">
              Enter email correctly
            </span>
          </div>
          <p className="pchs-form__payment-header">Payment Method</p>
          <div className="pchs-form__field">
            <label htmlFor="customer-card">Bank card number</label>
            <input
              className="form-field"
              type="text"
              name="customer-card"
              id="customer-card"
              maxLength={19}
              onChange={(e) => cardNumberInitialValidator(e)}
            />
            <span className="form-error-msg error-msg__card hidden">
              Enter card number correctly
            </span>
          </div>
          <div className="bank-system">
            <p className="bank-system__label">Chosen system</p>
            <img
              className="bank-system__sys-img system-visa"
              src={visa}
              alt="visa sign"
            />
            <img
              className="bank-system__sys-img system-mastercard"
              src={mastercard}
              alt="mastercard sign"
            />
            <img
              className="bank-system__sys-img system-american-exp"
              src={americanExpress}
              alt="american-express sign"
            />
          </div>
          <div className="card-dtls">
            <div className="card-dtls__expiry">
              <label htmlFor="expiry-date">Expiry Date</label>
              <input
                className="card-dtls__field"
                type="text"
                name="expiry-date"
                id="expiry-date"
                maxLength={7}
                onChange={(e) => dateInitialValidator(e)}
              />
              <span className="card-dtls-error-msg error-msg__date hidden">
                Enter expiry date correctly
              </span>
            </div>
            <div className="card-dtls__cvv">
              <label htmlFor="card-cvv">CVV</label>
              <input
                className="card-dtls__field"
                type="text"
                name="card-cvv"
                id="card-cvv"
                maxLength={3}
                onChange={(e) => cvvInitialValidator(e)}
              />
              <span className="card-dtls-error-msg error-msg__cvv hidden">
                Enter CVV correctly
              </span>
            </div>
          </div>
          <button
            className="pchs-form__btn submit-purchase"
            onClick={(e) => {
              e.preventDefault();
              validateForm();
            }}
          >
            Confirm and Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PurchaseFormModule;
