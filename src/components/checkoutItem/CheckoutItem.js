import './checkoutItem.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkout-item util-my-2 util-pb-2 util-border-bottom'>
      <div className='details-container'>
        <img src={imageUrl} alt='item' />
        <span className='name'>{name}</span>
      </div>
      <span className='price'>${price}</span>
      <span className='quantity'>{quantity}</span>
      <span className='amount'>${(quantity * price).toFixed(2)}</span>
      <div className='remove-button'>&#10006;</div>
    </div>
  );
};

export default CheckoutItem;
