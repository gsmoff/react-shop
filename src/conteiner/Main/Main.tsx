import { Container } from "@mui/system";
import Home from "../../pages/Home/Home";
import React from "react";
import CartPage from "pages/Cart/CartPage";
import AboutPage from "pages/About/AboutPage";
import ShippingPage from "pages/Shipping/ShippingPage";
import PaymentPage from "pages/Payment/PaymentPage";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "pages/Checkout/CheckoutPage";

const Main = () => {
  return (
    <main>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default Main;
