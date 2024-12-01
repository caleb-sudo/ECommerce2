const stripe = Stripe('pk_test_A7jK4iCYHL045qgjjfzAfPxu', {
    apiVersion: "2024-11-20.acacia",
});

const appearance = { 
    theme: 'stripe',
    variables: {
      borderRadius: '36px',
    }
 }
const options = { /* options */ }
const elements = stripe.elements({
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  appearance,
})

const expressCheckoutOptions = {
    buttonType: {
      applePay: 'buy',
      googlePay: 'buy',
      paypal: 'buynow',
      klarna: 'pay',
    }
  }
  const expressCheckoutElement = elements.create(
    'expressCheckout',
    expressCheckoutOptions
  )
expressCheckoutElement.mount('#express-checkout-element')