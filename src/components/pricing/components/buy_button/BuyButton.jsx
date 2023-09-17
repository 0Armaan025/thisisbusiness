import React from 'react';
import './buybutton.css';

const BuyButton = () => {

  const showAlert = () => {
    alert("DON'T BUY, IT'S A FRAUD, JAGJIT WANTS TO SCAM YOU, HE IS A SCAMMERRRR");
  }

  return (
    <>
        <div className="buyButton">
            <input type='button' value='Buy Now' className='buyBtn' onClick={showAlert}/>
        </div>
    </>
  )
}

export default BuyButton
