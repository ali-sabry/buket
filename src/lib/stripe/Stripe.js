import { loadStripe } from '@stripe/stripe-js';

  // loadStripe.setLoadParameters({advancedFraudSignals: false});

const Stripe =  loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);



export default Stripe;