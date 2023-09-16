import React from 'react';
import './pricing.css';

const PricingCard = ({ plan, price, features }) => (
  <div className="pricing-card1">
    <h2 className='planHeading' style={{color: "white",fontFamily: "font-family: 'Nunito', sans-serif;",fontSize: "24px"}}>{plan}</h2>
    <br/>
    <h1 className='planPrice' style={{color: "white",fontSize: "17px"}}>{price}</h1>

    <hr className='myHr' style={{background: "white"}} color='white'/>
    <ul>
      {features.map((feature, index) => (
        <li className='newLi' key={index}>
          {feature.available ? '✅' : '❌'} {feature.name}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => (
  <>
  <center><h1 className='pricingHeading'>Our Pricing</h1></center>
  <div className="pricing-card-container">
    <PricingCard
      plan="Bronze 🥉"
      price="RS. 199.99 /-"
      features={[
        { name: "Feature 1", available: true },
        { name: "Feature 2", available: true },
        { name: "Feature 3", available: false }
      ]}
    />
    <PricingCard
      plan="Gold 🪙"
      price="RS. 349.99 /-"
      features={[
        { name: "Feature 1", available: true },
        { name: "Feature 2", available: true },
        { name: "Feature 3", available: true },
        { name: "Feature 4", available: false },
        { name: "Feature 5", available: false }
      ]}
    />
    <PricingCard
      plan="Platinum 🏆"
      price="RS. 699.99 /-"
      features={[
        { name: "Feature 1", available: true },
        { name: "Feature 2", available: true },
        { name: "Feature 3", available: true },
        { name: "Feature 4", available: true },
        { name: "Feature 5", available: true },
        { name: "Feature 6", available: true },
        { name: "Feature 7", available: true }
      ]}
    />
  </div>
  <br/>
  </>
);

export default Pricing;
